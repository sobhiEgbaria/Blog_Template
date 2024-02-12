"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const usersRoute_1 = __importDefault(require("./routers/usersRoute"));
const postsRoute_1 = __importDefault(require("./routers/postsRoute"));
const authRoute_1 = __importDefault(require("./routers/authRoute"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use("/auth", authRoute_1.default);
exports.app.use("/users", usersRoute_1.default);
exports.app.use("/posts", postsRoute_1.default);
//run the server
const port = process.env.Port || 3001;
exports.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
