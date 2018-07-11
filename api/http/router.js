const Router = require('koa-router');
const router = new Router({prefix: '/api/v1'});

router.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
});

router.use(require('./routers/groups/user').middleware());
router.use(require('./routers/groups/index').middleware());

module.exports = router;