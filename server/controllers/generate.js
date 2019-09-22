const fs = require('fs');
const _ = require('lodash');


async function hello (ctx) {
    ctx.body = {user: "ronaldo"}
    console.log(ctx.body);
  }

async function send (ctx) {
    const components = ctx.request.body;
    const orderedComponents = components.sort(sortByVerticalAxis);
    const widgets = buildWidgets(orderedComponents);
    var contents = fs.readFileSync(__dirname + '/' + 'main_.dart', 'utf-8');
    
    const fileText = contents.replace('$1', widgets);
    const checkedStream = fileText.indexOf('Checkbox') != -1 ? fileText.replace('$2', 'bool _isSelected = true;') : fileText.replace('$2', '');
    fs.writeFile(__dirname + '/' + 'main.dart', checkedStream, (err) => {
        if (err) throw err;
        console.log("The file was succesfully saved!");
    });
}

function sortByVerticalAxis(a,b) {
    if (a.layoutItem.y < b.layoutItem.y)
        return - 1;
    if (a.layoutItem.y > b.layoutItem.y)
        return 1;
    if (a.layoutItem.y === b.layoutItem.y)
        return 0;
};

function buildWidgets(components) {
    let widgets = initializeRows();
    components.forEach((c) => {
        index = c.layoutItem.y;
        const filteredComponents = components.filter(comp => comp.layoutItem.y === c.layoutItem.y);
        if (filteredComponents.length > 1) {
            let items = []
            filteredComponents.forEach(component => {
                items.push(buildWidget(component, widgets));
            })
            widgets[index] = row(items);

        }
        else
            widgets[index] = row(buildWidget(c, widgets))
    });
    return widgets;
}

function buildWidget(component) {
    switch (component.type) {
        case 'button':
            return flexible(button(component.widget));
        case 'textField':
            return flexible(textField(component.widget));
        case 'checkBox':
            return flexible(checkbox(component.widget));
    }
}

function initializeRows() {
    rows = ['','','','','','','','','','',''];
    return rows.map(_ => row(null));
}

const row = (component) => {
    return component ? `Row(children: <Widget>[${component}])` : `Row(children: <Widget>[Container(height: 65)])`;
}

const flexible = (component) => {
    return `Flexible(
            fit: FlexFit.tight,
            child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:${component}
                )
            )`
}

const button = (properties) => {
    const { color, text } = properties;
    return `FlatButton(
        color: Colors.${color === 'primary' ? 'blue' : 'red'},
        textColor: Colors.white,
        disabledColor: Colors.grey,
        disabledTextColor: Colors.black,
        splashColor: Colors.blueAccent,
        onPressed: () {
        /*...*/
        },
        child: Text(
        "${text}",
        style: TextStyle(fontSize: 20.0),
        ),
    )`;
}

const checkbox = (properties) => {
    const { color, text } = properties;
    return (`Row(children: <Widget>[Checkbox(
                value: _isSelected, 
                ${ color ? "activeColor: Colors." + getColors(color) + "," : ""}
                ${ color ? "checkColor: Colors." + getColors(color) + "," : ""}
                onChanged: (bool value) {
                    setState(() {
                        _isSelected = value;
                });
            }), Text("${text}")])`
        )
}

const textField = (properties) => {
    const { color, text } = properties;
    return (`TextField(
                keyboardType: TextInputType.text,
                style: TextStyle(color: Colors.${getColors(color)}, fontSize: 30),
                decoration: InputDecoration(
                labelText:"${text}",
                labelStyle: TextStyle(color: Colors.black),
                )
            )`)
}
function getColors(color) {
    switch(color) {
        case 'primary':
            return 'blue';
        case 'secondary':
            return 'red';
        default:
            return 'blue';
    }
}
  module.exports = {
    hello,
    send
  }