'use strict';

/**
 * phone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::phone.phone');
