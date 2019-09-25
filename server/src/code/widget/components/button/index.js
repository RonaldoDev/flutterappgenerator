const { button } = require('./button/scaffold');

function getButton(component) {
    switch (component.type) {
        case 'button':
            return button(component.widget);
        case 'floatButton':
                return null;
        case 'iconButton':
            return null;
        case 'iconLabelButton':
                return null;
    }
}

module.exports = {
    getButton
}