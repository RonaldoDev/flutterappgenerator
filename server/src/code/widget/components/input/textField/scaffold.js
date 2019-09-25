
const textField = (properties) => {
    const { color, text } = properties;
    const colorString = color === 'default'? 'Colors.blue' : `Color(0xff${color.replace('#', '')})`
    return `
        TextField(
            keyboardType: TextInputType.text,
            style: TextStyle(color: ${colorString}, fontSize: 30),
            decoration: 
                InputDecoration(
                    labelText:"${text}",
                    labelStyle: TextStyle(color: Colors.black),
                    )
        )`
};

module.exports = {
    textField
}