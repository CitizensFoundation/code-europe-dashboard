"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
const trendsController_js_1 = require("./controllers/trendsController.js");
const app = new app_js_1.App([
    new trendsController_js_1.TrendsController(),
], 8000);
app.listen();
