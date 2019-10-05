const fs = require('fs');
var shell = require('shelljs');


function buildApk() {
    shell.cd(`/Users/ronaldostranger/workspace/flutter_app/hello_world/`);
    if(shell.exec('flutter build apk').code !== 0) {
        console.log("Error");
        shell.exit(1);
    }  
}

function createStreamResponse(ctx) {
    ctx.response.status = 200;
    let file = fs.createReadStream(`/Users/ronaldostranger/workspace/flutter_app/hello_world/code.tar.gz`);
    ctx.response.body = file;
}

module.exports ={
    buildApk,
    createStreamResponse
}
