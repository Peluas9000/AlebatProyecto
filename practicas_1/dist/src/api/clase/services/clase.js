"use strict";
/**
 * clase service
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreService("api::clase.clase", ({ strapi }) => ({
    async asignarProfesor(claseDocId, profesorDocId) {
        var _a, _b;
        // 1. Buscamos la clase y sus profesores actuales
        const clase = await strapi.documents("api::clase.clase").findOne({
            documentId: claseDocId,
            populate: ["profesors"],
        });
        // 2. Buscamos al profesor y sus clases actuales
        const profesor = await strapi.documents("api::profeso.profeso").findOne({
            documentId: profesorDocId,
            populate: ["clases"],
        });
        if (!clase || !profesor) {
            throw new Error("Clase o Profesor no encontrados.");
        }
        // --- VALIDACIONES ---
        if (((_a = clase.profesors) === null || _a === void 0 ? void 0 : _a.length) >= 3) {
            throw new Error("La clase ya tiene el máximo de 3 profesores.");
        }
        if (((_b = profesor.clases) === null || _b === void 0 ? void 0 : _b.length) >= 5) {
            throw new Error("El profesor ya imparte el máximo de 5 clases.");
        }
        // 3. Ejecutar la unión (Strapi 5 usa documentId)
        const resultado = await strapi.documents("api::clase.clase").update({
            documentId: claseDocId,
            data: {
                // Añadimos el nuevo profesor a la lista existente
                profesors: [...clase.profesors.map((p) => p.id), profesor.id],
            },
        });
        // 4. Notificación automática (Parte del ejercicio)
        strapi.log.info(`✅ ASIGNACIÓN EXITOSA: ${profesor.nombre} asignado a ${clase.titulo}`);
        return resultado;
    },
}));
