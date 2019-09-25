const { textField } = require('./textField/scaffold');

function getInput(component) {
    switch (component.type) {
        case 'datetime':
            return null;
        case 'textField':
            return textField(component.widget);
        case 'textIconField':
            return null;
    }
}

module.exports = {
    getInput
}