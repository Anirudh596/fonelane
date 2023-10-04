'use strict';

/**
 * deal-of-the-day controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::deal-of-the-day.deal-of-the-day');
