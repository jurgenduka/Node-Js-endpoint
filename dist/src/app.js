"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const apiController_1 = require("./controllers/apiController");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.post('/api/getNumbers', apiController_1.getNumbers);
exports.default = app;
