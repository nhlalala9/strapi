'use strict';

/**
 * boxing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::boxing.boxing');
