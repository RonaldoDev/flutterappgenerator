const { getButton } = require('./button');
const { getCheckbox } = require('./checkbox');
const { flexible } = require('./layout/flexible/scaffold');
const { getInput } = require('./input');


function insertNode(component) {
    switch (component.type) {
        case 'button':
            return flexible(getButton(component));
        case 'textField':
            return flexible(getInput(component));
        case 'checkBox':
            return flexible(getCheckbox(component));
    }
}

module.exports = {
    insertNode
}