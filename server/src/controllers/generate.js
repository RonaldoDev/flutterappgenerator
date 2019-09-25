const { generateCode } = require('../code');


async function generate (ctx) { 
    const data = ctx.request.body;
    generateCode(data);
}

module.exports = {
    generate
}