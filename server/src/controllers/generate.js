const { generateCode } = require('../code');

async function generate (ctx) { 
    const data = ctx.request.body;
    generateCode(data);
    ctx.response.status = 201;
    ctx.response.body = "top";
}

module.exports = {
    generate
}