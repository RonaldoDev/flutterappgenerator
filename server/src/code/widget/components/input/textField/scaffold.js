
const textField = (properties) => {
    const { text } = properties;
    return `
        TextField(
            keyboardType: TextInputType.text,
            style: TextStyle(fontSize: 14),
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