"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pages_1 = __importDefault(require("app/Pages"));
const express_1 = __importDefault(require("express"));
// instance express app
const app = (0, express_1.default)();
app.use((req, res, next) => {
    // TODO: Create a auth validation to enable user acess to api
    next();
});
app.use("/", Pages_1.default);
app.listen(4000, () => {
    console.log("backend iniciado com sucesSOS.");
});
