

const { sortByVerticalAxis } = require('./dataProcessing');
const { getTemplate, saveFile } = require('./file');
const { buildWidgetsTree } = require('./widget');
const { makeCodeConversion } = require('./generator');

async function generateCode (data) {
    data.forEach(view => {
        const { components } = view;
        const template = components.filter(f => ['camera','map','webview'].includes(f.type))
        if (template.length) {
            let fileContent = getTemplate(template[0].type);
            if (template[0].type === 'webview') {
                fileContent = fileContent.replace('$url', `'${template[0].widget.website}'`);
            }
            const stream = makeCodeConversion(fileContent, view.title);
            saveFile(stream, view.title);
        } else {
            const orderedComponents = components.sort(sortByVerticalAxis);      
            const widgets = buildWidgetsTree(orderedComponents);      
            const fileContent = getTemplate('home');
            const stream = makeCodeConversion(fileContent, view.title, widgets);
            saveFile(stream, view.title);
        }
    })
}

module.exports = {
    generateCode
}