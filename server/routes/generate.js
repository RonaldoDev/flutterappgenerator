const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/generate')

router.get('/', Ctrl.hello);
router.post('/', Ctrl.send);

module.exports = router.routes()