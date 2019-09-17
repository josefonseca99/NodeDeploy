"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataController_1 = require("../controllers/dataController");
class DataRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', dataController_1.dataController.data);
        this.router.post('/', dataController_1.dataController.create);
    }
}
const dataRoutes = new DataRoutes();
exports.default = dataRoutes.router;
