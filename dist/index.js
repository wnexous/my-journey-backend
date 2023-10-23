"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// instance express appw
const app = (0, express_1.default)();
app.use((req, res, next) => {
    console.log(req.method);
    next();
});
app.get("/:id", (req, res) => {
    console.log(req.params);
    res.json(req.params);
});
app.listen(4000, () => {
    console.log("backend iniciado com sucesSOS.");
});
