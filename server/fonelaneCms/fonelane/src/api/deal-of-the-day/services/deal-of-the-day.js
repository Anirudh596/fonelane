'use strict';

/**
 * deal-of-the-day service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deal-of-the-day.deal-of-the-day');
