'use strict';

/**
 * storage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::storage.storage');
