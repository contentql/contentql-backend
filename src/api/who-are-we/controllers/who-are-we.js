'use strict';

/**
 * who-are-we controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::who-are-we.who-are-we');
