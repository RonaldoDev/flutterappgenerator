const { getAction } = require('./behaviors');

const getTemplate = (properties) => {
    const { color, text, action, theme } = properties;
    const colorString = theme === 'primary' ? 
    'color: Theme.of(context).primaryColor,' : theme === 'secondary' ? 
    'color: Theme.of(context).accentColor,' : theme === 'custom' ?
    `color: Color(0xff${color.replace('#', '')}),` : '';
    const actionPressed = getAction(action);
    return `FlatButton(
            ${colorString}
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



