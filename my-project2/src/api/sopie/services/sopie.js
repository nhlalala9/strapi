'use strict';

/**
 * sopie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sopie.sopie');
