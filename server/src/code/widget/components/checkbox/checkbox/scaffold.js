
const checkbox = (properties) => {
    const { color, text } = properties;
    const colorString = color === 'default'? 'Colors.blue' : `Color(0xff${color.replace('#', '')})`
    return `
         Row(
            children: 
                <Widget>[
                    Checkbox(
                        value: _isSelected, 
                        activeColor: ${ colorString },
                        checkColor: ${ colorString },
                        onChanged: (bool value) {
                            setState(() {
                                _isSelected = value;
                            });
                        }), 
                    Text("${text}")
                ]
            )`;
        
};

module.exports = {
    checkbox
};