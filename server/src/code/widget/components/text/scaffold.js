
const getTemplate = (properties) => {
    const { color, text, fontSize } = properties;
    const colorString = theme === 'primary' ? 
        'color: Theme.of(context).primaryColor' : theme === 'secondary' ? 
        'color: Theme.of(context).accentColor' : theme === 'custom' ?
        `color: Color(0xff${color.replace('#', '')})` : '';
    return (
        `Text(
            '${text}',
            textAlign: TextAlign.center,
            overflow: TextOverflow.ellipsis,
            style: TextStyle( fontSize: ${fontSize}, ${colorString}),
          )`);
};

const text = (properties) => ({
    template: getTemplate(properties),
    minChildren: 0,
    maxChildren: 1,
    children: []

})
module.exports = {
    text
}



