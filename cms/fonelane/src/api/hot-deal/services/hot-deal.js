'use strict';

/**
 * hot-deal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hot-deal.hot-deal');
