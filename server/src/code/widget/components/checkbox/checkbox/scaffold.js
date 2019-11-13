
const checkbox = (properties) => {
    const { color, text } = properties;
    const activeColor = color === 'primary' ? 
    'activeColor: Theme.of(context).primaryColor,' : color === 'secondary' ? 
    'activeColor: Theme.of(context).accentColor,' : color === 'custom' ?
    `activeColor: Color(0xff${color.replace('#', '')}),` : '';
    const checkColor = color === 'primary' ? 
    'checkColor: Theme.of(context).primaryColor,' : color === 'secondary' ? 
    'checkColor: Theme.of(context).accentColor,' : color === 'custom' ?
    `checkColor: Color(0xff${color.replace('#', '')}),` : '';
    
    return `
         Row(
            children: 
                <Widget>[
                    Checkbox(
                        value: _isSelected, 
                        ${ activeColor }
                        ${ checkColor }
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