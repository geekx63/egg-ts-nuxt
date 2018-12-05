// import { createConnection } from "typeorm";
import { Nuxt, Builder } from 'nuxt';
// import 'reflect-metadata';
import { config } from './nuxt.config';
// Instantiate nuxt.js
const nuxt = new Nuxt(config);

module.exports = (app) => {
  app.beforeStart(async () => {
    if (config.dev) {
    // if (true) {
      const builder = new Builder(nuxt);
      await builder.build();
    }
    // createConnection();
    app.nuxt = nuxt;
  });
};
