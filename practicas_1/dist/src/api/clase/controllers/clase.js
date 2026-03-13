"use strict";
/**
 * clase controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::clase.clase", ({ strapi }) => ({
    async asignar(ctx) {
        const { claseId, profesorId } = ctx.request.body;
        if (!claseId || !profesorId) {
            return ctx.badRequest("Se requieren claseId y profesorId");
        }
        try {
            const data = await strapi
                .service("api::clase.clase")
                .asignarProfesor(claseId, profesorId);
            ctx.body = { message: "Profesor asignado correctamente", data };
        }
        catch (err) {
            // Aquí es donde el usuario verá "El profesor ya imparte el máximo de 5 clases"
            ctx.badRequest(err.message);
        }
    },
}));
