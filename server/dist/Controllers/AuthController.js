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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthBL_1 = require("../Services/AuthBL");
class AuthController {
    constructor() {
        this.authBL = new AuthBL_1.AuthBL();
    }
    handleLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const token = req.body.token;
                const user = yield this.authBL.verifyGoogleToken(token);
                console.log(user);
                // Additional steps like creating a session token (JWT)
                // and returning user data and session token to the client
                console.log(JSON.stringify(user));
                res.status(200).json({ user });
            }
            catch (error) {
                res
                    .status(401)
                    .json({
                    message: "Authentication failed",
                    error: error.message,
                });
            }
        });
    }
}
exports.AuthController = AuthController;
