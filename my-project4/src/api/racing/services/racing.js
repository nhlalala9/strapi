'use strict';

/**
 * racing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::racing.racing');
