'use strict';

/**
 * boxing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boxing.boxing');
