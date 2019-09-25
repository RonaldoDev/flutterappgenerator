const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/generate')

router.post('/', Ctrl.generate);

module.exports = router.routes()