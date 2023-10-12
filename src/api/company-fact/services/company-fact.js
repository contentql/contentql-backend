'use strict';

/**
 * company-fact service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company-fact.company-fact');
