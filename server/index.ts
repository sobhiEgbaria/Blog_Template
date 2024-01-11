import express from "express";
// import activityLogger from './middlewares/activityLogger';
// import usersRoute from './routes/usersRoute';
// import postsRoute from './routes/postsRoute';

const app = express();
app.use(express.json());
// app.use(activityLogger);

// app.use("/users", usersRoute);
// app.use("/posts", postsRoute);

//run the server
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
