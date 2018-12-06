// import { createConnection } from "typeorm";
import { Application, Context, EggAppConfig } from 'egg';
import { Nuxt, Builder } from 'nuxt';
// import 'reflect-metadata';
import config from '../../nuxt.config';
// Instantiate nuxt.js
const nuxt = new Nuxt(config);

export default function nuxtMiddleware(options: EggAppConfig['nuxt'], app: Application): any {
  if (options) {};

  let flag = false;
  let routerArr = [];
  app.coreLogger.debug('加载nuxt中间件，当前环境：', process.env.NODE_ENV);
  if (config.dev) {
    const builder = new Builder(nuxt);
    builder.build();
  }
  return async (ctx: Context, next: () => Promise<any>) => {
    if (!flag) {
      routerArr = app.router.stack.map((el) => el.path);
      flag = true;
    }
    if (routerArr.some((el) => el === ctx.path)) {
      return await next();
    }
    await next();
    const { res, req, body } = ctx;
    res.data = body;
    ctx.status = 200;
    return new Promise((resolve, reject) => {
      nuxt.render(req, res, (promise) => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  };
};
