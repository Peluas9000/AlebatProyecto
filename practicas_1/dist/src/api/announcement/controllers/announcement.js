"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::announcement.announcement", ({ strapi }) => ({
    /**
     * Devuelve anuncios con updateCount > 5
     */
    async frequentlyUpdated(ctx) {
        try {
            // Consultamos usando el Document Service de Strapi 5
            const entries = await strapi
                .documents("api::announcement.announcement")
                .findMany({
                filters: {
                    updateCount: {
                        $gt: 5, // Justificación: "cuyo updateCount sea mayor a 5"
                    },
                },
                // Opcional: Ordenar por los más actualizados primero
                sort: { updateCount: "desc" },
            });
            // Retornamos los datos siguiendo el formato estándar de Strapi
            return { data: entries };
        }
        catch (err) {
            // Manejo de errores básico
            ctx.throw(500, "Error al obtener los anuncios frecuentes");
        }
    },
    async resetUpdateCount(ctx) {
        // 1. Obtenemos el ID del cuerpo de la petición (POST)
        const { id } = ctx.request.body;
        if (!id) {
            return ctx.badRequest("El ID del anuncio es requerido.");
        }
        try {
            // 2. Actualizamos el documento usando el Document Service
            const entry = await strapi
                .documents("api::announcement.announcement")
                .update({
                documentId: id, // O usa 'id' si tu lógica interna así lo requiere
                data: {
                    updateCount: 0,
                },
            });
            if (!entry) {
                return ctx.notFound("No se encontró el anuncio especificado.");
            }
            // 3. Respuesta exitosa
            return {
                message: "updateCount reseteado a 0",
                data: entry,
            };
        }
        catch (err) {
            ctx.throw(500, "Error al resetear el contador: " + err.message);
        }
    },
}));
