const { getButton } = require('./button');
const { getCheckbox } = require('./checkbox');
const { text } = require('./text/scaffold');
const { flexible } = require('./layout/flexible/scaffold');
const { getInput } = require('./input');
const {  select } = require('./select/select/scaffold');

function insertNode(component) {
    switch (component.type) {
        case 'button':
            return flexible(getButton(component));
        case  'iconButton':
            return flexible(getButton(component));
        case 'textField':
            return flexible(getInput(component));
        case 'checkBox':
            return flexible(getCheckbox(component));
        case 'text':
            return flexible(text(component.widget).template);
        case 'select':
            return flexible(select(component.widget).template);
    }
}

module.exports = {
    insertNode
}