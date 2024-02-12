import express, { Request, Response } from "express";
import { UserController } from "../Controllers/UserController";
import "dotenv/config";
import { OAuth2Client } from "google-auth-library";
import { access } from "fs";
const router = express.Router();

const userController = new UserController();

router.post(
  "/",
  async (req: Request, res: Response) => await userController.addUser(req, res)
);

router.get(
  "/",
  async (req: Request, res: Response) =>
    await userController.getAllUsers(req, res)
);

router.get(
  "/:id",
  async (req: Request, res: Response) => await userController.getUser(req, res)
);

router.put(
  "/:id",
  async (req: Request, res: Response) =>
    await userController.updateUser(req, res)
);
router.delete(
  "/:id",
  async (req: Request, res: Response) =>
    await userController.deleteUser(req, res)
);

export default router;

// router.post("/", async (req: Request, res: Response) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001");
//   res.header("Referrer-Policy", "no-referrer-when-downgrade");

//   const REDIRECT_UR = "http://127.0.0.1:3001/oauth";

//   const oAuth2Client = new OAuth2Client(
//     process.env.ClientID,
//     process.env.ClientSecret,
//     REDIRECT_UR
//   );

//   const authorizeUrl = oAuth2Client.generateAuthUrl({
//     access_type: "offline",
//     scope: "https://www.googleapis.com/auth/userinfo.profile openid",
//     prompt: "consent",
//   });
//   res.json({ url: authorizeUrl });
// });

// const getUsersData = async (access_token: string) => {
//   const response = await fetch(
//     `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
//   );
//   const data = await response.json();
//   console.log("data", data);
// };
// router.get("/", async (req: Request, res: Response) => {
//   const code = req.query.code as any;
//   try {
//     const REDIRECT_UR = "http://127.0.0.1:3001/oauth";

//     const oAuth2Client = new OAuth2Client(
//       process.env.ClientID,
//       process.env.ClientSecret,
//       REDIRECT_UR
//     );
//     const res = await oAuth2Client.getToken(code);
//     await oAuth2Client.setCredentials(res.tokens);
//     const users = oAuth2Client.credentials;
//     await getUsersData(users.access_token as any);
//   } catch (error) {
//     console.log("error", error);
//   }
// });
