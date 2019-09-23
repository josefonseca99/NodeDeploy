"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lighterController_1 = require("../controllers/lighterController");
class LighterRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', lighterController_1.lighterController.data);
        this.router.post('/', lighterController_1.lighterController.create);
    }
}
const lighterRoutes = new LighterRoutes();
exports.default = lighterRoutes.router;
