"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async getSummary(ctx) {
        try {
            // 1. Obtenemos todos los anuncios (solo el campo title)
            const announcements = await strapi
                .documents("api::announcement.announcement")
                .findMany({
                fields: ["title"],
                status: "published", // O 'draft' según lo que necesites reportar
            });
            // 2. Extraemos los títulos y los unimos en un solo string
            const titlesArray = announcements.map((a) => a.title);
            const combinedText = titlesArray.join(" | "); // Separados por una barra
            // 3. Contamos el total
            const totalCount = announcements.length;
            // 4. Devolvemos la respuesta personalizada
            return {
                data: {
                    summary: combinedText,
                    count: totalCount,
                    titles: titlesArray, // Opcional: para mayor claridad
                },
            };
        }
        catch (err) {
            ctx.throw(500, "Error al generar el reporte: " + err.message);
        }
    },
};
