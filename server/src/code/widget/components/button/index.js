const { button } = require('./button/scaffold');
const { iconButton } = require('./iconButton/scaffold');

function getButton(component) {
    switch (component.type) {
        case 'button':
            return button(component.widget).template;
        case 'floatButton':
            return null;
        case 'iconButton':
            return iconButton(component.widget).template;
        case 'iconLabelButton':
            return null;
    }
}

module.exports = {
    getButton
}