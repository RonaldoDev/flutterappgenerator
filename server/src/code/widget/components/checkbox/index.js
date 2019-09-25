const { checkbox } = require('./checkbox/scaffold');

function getCheckbox(component) {
    switch (component.type) {
        case 'checkBox':
            return checkbox(component.widget);
        case 'radioButton':
                return null;
        case 'textIconField':
            return null;
    }
}

module.exports = {
    getCheckbox
}