const fs = require('fs');
const path = require('path');
const app_path = path.dirname(require.main.filename || process.mainModule.filename);
const templatePath = `${app_path}/src/code/flutter_templates/`;
const flutterPath = `${app_path}/src/code/flutter_templates/`; // flutter_app/hello_world/lib/`

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