

function makeCodeConversion(content, widgets, title) {
    let fileContent = content.replace('$components', widgets);
        const indexImport = fileContent.indexOf('view');
        fileContent = fileContent.replace('$import', indexImport != -1 ? 'import "' + fileContent.substr(indexImport, 5) + '.dart";' : '');
        fileContent = fileContent.replace(/\$title/g, title);

        return fileContent.indexOf('Checkbox') != -1 ? fileContent.replace('$variavel', 'bool _isSelected = true;') : fileContent.replace('$variavel', '');
}

module.exports = {
    makeCodeConversion
}