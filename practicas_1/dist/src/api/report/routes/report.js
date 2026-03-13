"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "GET",
            path: "/reports/announcements-summary",
            handler: "report.getSummary",
            config: {
                auth: false, // Ajustar según necesidad de seguridad
            },
        },
    ],
};
