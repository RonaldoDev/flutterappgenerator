
const getTemplate = (properties) => {
    const { color, text, fontSize } = properties;
    const colorString = color === 'primary'? 'Colors.blue' : `Color(0xff${color.replace('#', '')})`
    return (
        `Text(
            '${text}',
            textAlign: TextAlign.center,
            overflow: TextOverflow.ellipsis,
            style: TextStyle( fontSize: ${fontSize * 2}, color: ${colorString}),
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



