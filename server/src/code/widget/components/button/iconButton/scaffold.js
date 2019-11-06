

const { getAction } = require('./behaviors');
const textLabel = require('../../text/scaffold').text;


const getTemplate = (properties) => {
    const { color, text, action, icon } = properties;
    const colorString = color === 'primary' ? 'Colors.blue' : `Color(0xff${color.replace('#', '')})`
    const actionPressed = getAction(action);
    const label = text ? `${textLabel(properties).template},` : '';
    return (
        `Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
            ${label}
            IconButton(
                icon: Icon(Icons.${icon}),
                color: ${colorString},
                iconSize: 48,
                onPressed: () {
                ${actionPressed}
                },
            )
            
            ],
        )`
    );
};

const iconButton = (properties) => ({
    template: getTemplate(properties),
    minChildren: 0,
    maxChildren: 1,
    children: ['Text', 'Decorator', 'Icon']

})
module.exports = {
    iconButton
}






