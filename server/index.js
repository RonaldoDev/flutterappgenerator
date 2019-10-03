require('dotenv').config();
const server = require('./src')

const port = process.env.PORT || 3001
server.listen(port, () => console.log(`API server started on ${port}`))
