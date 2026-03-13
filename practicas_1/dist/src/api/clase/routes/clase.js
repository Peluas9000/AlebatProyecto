"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "POST",
            path: "/clases/asignar-profesor",
            handler: "api::clase.clase.asignar",
        },
    ],
};
