"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = (0, promise_1.createPool)({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true, // Bandera que indica si la conexión debe esperar a que se libere una conexión cuando no hay conexiones disponibles.
    connectionLimit: 10, // Número máximo de conexiones permitidas.
    queueLimit: 0 // Número máximo de conexiones en cola. (0 significa ilimitado)
});
exports.default = pool;
