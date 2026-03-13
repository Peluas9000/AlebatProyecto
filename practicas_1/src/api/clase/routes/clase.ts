export default {
  routes: [
    {
      method: "POST",
      path: "/clases/asignar-profesor",
      handler: "api::clase.clase.asignar",
    },
  ],
};
