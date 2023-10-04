'use strict';

/**
 * deal-of-the-day router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::deal-of-the-day.deal-of-the-day');
