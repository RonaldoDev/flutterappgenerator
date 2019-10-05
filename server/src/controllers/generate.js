const { generateCode } = require('../code');
const buildApk = require('../build');

async function generate (ctx) { 
    try {
        const data = ctx.request.body;
        generateCode(data);
        buildApk();
        createStreamResponse(ctx);
    }
    catch(e) {
        ctx.response.status = 400;
        ctx.response.body = e;
    }
}

module.exports = {
    generate
}