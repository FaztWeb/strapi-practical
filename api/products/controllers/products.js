"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    // return 'strapi';
    const products = await strapi.services.products.find(ctx.query);
    return products.map((product, i) => `${i}. ${product.title}`);
  },
};
