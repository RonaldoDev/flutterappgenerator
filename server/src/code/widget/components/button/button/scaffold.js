const { getAction } = require('./behaviors');

const getTemplate = (properties) => {
    const { color, text, action } = properties;
    const colorString = color === 'default'? 'Colors.blue' : `Color(0xff${color.replace('#', '')})`
    const actionPressed = getAction(action);
    console.log(actionPressed);
    return `FlatButton(
            color: ${colorString},
            textColor: Colors.white,
            disabledColor: Colors.grey,
            disabledTextColor: Colors.black,
            splashColor: Colors.blueAccent,
            onPressed: () {
                ${actionPressed}
            },
            child: 
                Text(
                    "${text}",
                    style: TextStyle(fontSize: 20.0),
                ),
        )`;
};

const button = (properties) => ({
    template: getTemplate(properties),
    minChildren: 0,
    maxChildren: 1,
    children: ['Text', 'Decorator', 'Icon']

})
module.exports = {
    button
}



