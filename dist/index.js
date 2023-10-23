"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// instance express app
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    console.log(req);
});
app.listen(4000, () => {
    console.log("backend iniciado com sucesso");
});
