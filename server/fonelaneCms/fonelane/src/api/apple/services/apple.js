'use strict';

/**
 * apple service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::apple.apple');
