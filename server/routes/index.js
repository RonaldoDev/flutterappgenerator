module.exports = (router) => {
    router.prefix('/v1')
    router.use('/generate', require('./generate'))
  }