const fs = require('fs');

const path = '/Users/ronaldostranger/workspace/';
const templatePath = `${path}TCC/server/src/code/flutter_templates/`;
const flutterPath = `${path}flutter_app/hello_world/lib/`

function getTemplate(template) {
    switch(template){
        case 'home':
            return fs.readFileSync(templatePath + 'main_.dart', 'utf-8');
        default:
            return fs.readFileSync(templatePath + 'main_.dart', 'utf-8');
    }
    
}

function saveFile(stream, fileName) {
    fs.writeFile(flutterPath + `${fileName}.dart`, stream, (err) => {
        if (err) throw err;
        console.log("The file was succesfully saved!");
    });
}

module.exports = {
    getTemplate,
    saveFile
}