import express from "express";
import usersRoute from "./routers/usersRoute";
import postsRoute from "./routers/postsRoute";
import authRoute from "./routers/authRoute";

import "dotenv/config";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/posts", postsRoute);

//run the server
const port = process.env.Port || 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
