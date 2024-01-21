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
exports.getClient = exports.connect = void 0;
const pg_1 = require("pg");
require("dotenv/config");
const client = new pg_1.Client({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432", 10),
});
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Connected to PostgreSQL");
        }
        catch (error) {
            console.error("Error connecting to PostgreSQL:", error);
        }
    });
}
exports.connect = connect;
connect();
function getClient() {
    return client;
}
exports.getClient = getClient;
