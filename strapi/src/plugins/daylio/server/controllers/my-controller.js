'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('daylio')
      .service('myService')
      .getWelcomeMessage();
  },
});
