/**
 * clase service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::clase.clase",
  ({ strapi }) => ({
    async asignarProfesor(claseDocId: string, profesorDocId: string) {
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
      if (clase.profesors?.length >= 3) {
        throw new Error("La clase ya tiene el máximo de 3 profesores.");
      }

      if (profesor.clases?.length >= 5) {
        throw new Error("El profesor ya imparte el máximo de 5 clases.");
      }

      // 3. Ejecutar la unión (Strapi 5 usa documentId)
      const resultado = await strapi.documents("api::clase.clase").update({
        documentId: claseDocId,
        data: {
          // Añadimos el nuevo profesor a la lista existente
          profesors: [...clase.profesors.map((p: any) => p.id), profesor.id],
        } as any,
      });

      // 4. Notificación automática (Parte del ejercicio)
      strapi.log.info(
        `✅ ASIGNACIÓN EXITOSA: ${profesor.nombre} asignado a ${clase.titulo}`,
      );

      return resultado;
    },
  }),
);
