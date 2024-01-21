import express from "express";
// import activityLogger from './middlewares/activityLogger';
import usersRoute from "./routers/usersRoute";
import postsRoute from "./routers/postsRoute";
import "dotenv/config";
import { getClient } from "./db";

const app = express();
app.use(express.json());
// app.use(activityLogger);

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

//run the server
const port = process.env.Port || 7000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

getClient();
