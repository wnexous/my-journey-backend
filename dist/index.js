"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Pages_1 = __importDefault(require("./app/Pages"));
const signin_1 = __importDefault(require("./app/Pages/signin"));
const body_parser_1 = __importDefault(require("body-parser"));
// instance express app
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    // TODO: Create a auth validation to enable user acess to api
    next();
});
app.use("/api/", Pages_1.default);
app.use("/api/", signin_1.default);
app.listen(4000, () => {
    console.log("backend iniciado com sucesSOS.");
});
