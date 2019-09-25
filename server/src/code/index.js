

const { sortByVerticalAxis } = require('./dataProcessing');
const { getTemplate, saveFile } = require('./file');
const { buildWidgets } = require('./widget');
const { makeCodeConversion } = require('./generator');

async function generateCode (data) {
    data.forEach(view => {
        const { components }  = view
        const orderedComponents = components.sort(sortByVerticalAxis);      
        const widgets = buildWidgets(orderedComponents);      
        let fileContent = getTemplate('home');
        const stream = makeCodeConversion(fileContent, widgets, view.title);
        saveFile(stream, view.title);

    })
}

module.exports = {
    generateCode
}