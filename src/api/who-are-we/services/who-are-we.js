'use strict';

/**
 * who-are-we service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::who-are-we.who-are-we');
