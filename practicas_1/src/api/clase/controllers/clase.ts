import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::clase.clase",
  ({ strapi }) => ({
    async asignar(ctx) {
      const { claseId, profesorId } = ctx.request.body;

      if (!claseId || !profesorId) {
        return ctx.badRequest(
          "Se requieren claseId (documentId) y profesorId (documentId)",
        );
      }

      try {
        // Llamamos al servicio que ya programaste
        const data = await strapi
          .service("api::clase.clase")
          .asignarProfesor(claseId, profesorId);

        ctx.body = { message: "Profesor asignado correctamente", data };
      } catch (err: any) {
        ctx.badRequest(err.message);
      }
    },
  }),
);
