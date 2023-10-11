'use strict';

/**
 * just-in service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::just-in.just-in');
