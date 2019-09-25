const { getComponent } = require('./components');

function buildWidgets(components) {
    let widgets = initializeRows();
    components.forEach((c) => {
        index = c.layoutItem.y;
        const filteredComponents = components.filter(comp => comp.layoutItem.y === c.layoutItem.y);
        if (filteredComponents.length > 1) {
            let items = []
            filteredComponents.forEach(component => {
                items.push(getComponent(component, widgets));
            })
            widgets[index] = row(items);
        }
        else
            widgets[index] = row(getComponent(c, widgets))
    });
    return widgets;
}


function initializeRows() {
    rows = ['','','','','','','','','','',''];
    return rows.map(_ => row(null));
}

const row = (component) => {
    return component ? `Row(children: <Widget>[${component}])` : `Row(children: <Widget>[Container(height: 50)])`;
}

module.exports = {
    buildWidgets
}