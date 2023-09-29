'use strict';

/**
 * storage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::storage.storage');
