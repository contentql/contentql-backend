'use strict';

/**
 * who-are-we router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::who-are-we.who-are-we');
