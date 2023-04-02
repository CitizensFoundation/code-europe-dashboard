"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path = __importStar(require("path"));
const { Client } = require("@opensearch-project/opensearch");
class App {
    constructor(controllers, port) {
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT || "8000");
        if (process.env.NODE_ENV === 'development') {
            this.esClient = new Client({
                node: 'https://search-ce-dashboard-two-ol4e2jvmcgv4fbvzu72r7gfrqi.us-east-1.es.amazonaws.com/'
            });
            //      this.esClient = new Client({ node: 'http://localhost:9200' })
        }
        else if (process.env.QUOTAGUARDSTATIC_URL) {
            this.esClient = new Client({
                node: 'https://search-ce-dashboard-two-ol4e2jvmcgv4fbvzu72r7gfrqi.us-east-1.es.amazonaws.com/',
                proxy: process.env.QUOTAGUARDSTATIC_URL
            });
            console.log("USING QUOTAGUARD_URL");
        }
        else {
            this.esClient = new Client({
                node: 'https://search-ce-dashboard-two-ol4e2jvmcgv4fbvzu72r7gfrqi.us-east-1.es.amazonaws.com/'
            });
        }
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    initializeMiddlewares() {
        if (process.env.NODE_ENV !== 'development' && !process.env.DISABLE_FORCE_HTTPS) {
            this.app.enable('trust proxy');
            this.app.use(function checkProtocol(req, res, next) {
                console.log(`Protocol ${req.protocol}`);
                if (!/https/.test(req.protocol)) {
                    res.redirect("https://" + req.headers.host + req.url);
                }
                else {
                    return next();
                }
            });
        }
        this.app.use(body_parser_1.default.json());
        this.app.use(express_1.default.static(path.join(__dirname, '../../web-app/dist')));
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            controller.setEsClient(this.esClient);
            this.app.use('/', controller.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.App = App;
