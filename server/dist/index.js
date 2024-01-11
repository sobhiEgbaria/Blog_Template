"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import activityLogger from './middlewares/activityLogger';
// import usersRoute from './routes/usersRoute';
// import postsRoute from './routes/postsRoute';
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(activityLogger);
// app.use("/users", usersRoute);
// app.use("/posts", postsRoute);
//run the server
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
