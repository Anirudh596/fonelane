'use strict';

/**
 * cover service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cover.cover');
