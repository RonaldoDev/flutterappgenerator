const { getAction } = require('./behaviors');

const button = (properties) => {
    const { color, text, hasActions, action } = properties;
    const colorString = color === 'default'? 'Colors.blue' : `Color(0xff${color.replace('#', '')})`
    const actionPressed = getAction(action);

    return `
        FlatButton(
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

module.exports = {
    button
}



