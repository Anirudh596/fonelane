'use strict';

/**
 * iphone controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::iphone.iphone', ({ strapi }) => ({
    async findOne(ctx){
        const { id } = ctx.params;

        const entity = await strapi.db.query('api::iphone.iphone').findOne({
            populate:true,
            where: { slug: id },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
