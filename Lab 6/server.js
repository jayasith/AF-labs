const Koa = require('koa');
require('./dal');
serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const HomeRoutes = require('./routes/home.router')
const PostRout = require('./routes/post.routes');

const app = new Koa();
/*app.use(ctx => {

    ctx.body = 'Hello world';
});*/

app.use(bodyParser());
app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());
app.use(PostRout.routes()).use(PostRout.allowedMethods());

app.use(serve('public/'));
app.listen(3000);
console.log('Applicatio is running on port 3000');