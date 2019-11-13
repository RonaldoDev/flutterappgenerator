
function makeCodeConversion(content, title, widgets=null, components=null) {
    if (widgets) {
        let fileContent = content.replace('$components', widgets);
        fileContent = fileContent.replace(/\$title/g, title);
        fileContent = buildImports(fileContent, components);
        fileContent = buildCheckbox(fileContent);
        return fileContent;
    }
    return content.replace(/\$title/g, title);
}

function buildImports(fileContent, components) {
   let imports = '';
    components.forEach(component => {
        if (component.widget.action.value) {
            imports += `import '${component.widget.action.value}.dart';\n`
        }
    })
    fileContent = fileContent.replace('$import', imports.length > 0 ? imports : '');
    console.log(imports.length > 0 )
   return fileContent;
}

function buildCheckbox(fileContent) {
    return fileContent.indexOf('Checkbox') != -1 ? fileContent.replace('$variavel', 'bool _isSelected = true;') : fileContent.replace('$variavel', '');
}

function buildDropdown(fileContent, components) {
    const component = components.filter(component => component.type === 'select');
    return fileContent.replace('$dropdown', component.length ? `String dropdownValue = "${component[0].widget.text}";`: '');
}

module.exports = {
    makeCodeConversion
}