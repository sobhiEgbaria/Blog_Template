"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../Controllers/UserController");
require("dotenv/config");
const router = express_1.default.Router();
const userController = new UserController_1.UserController();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield userController.addUser(req, res); }));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield userController.getAllUsers(req, res); }));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield userController.getUser(req, res); }));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield userController.updateUser(req, res); }));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield userController.deleteUser(req, res); }));
exports.default = router;
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
