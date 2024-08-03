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
exports.UserController = void 0;
const db_1 = __importDefault(require("../config/db"));
const userRepository_1 = require("../data-access/userRepository");
class UserController {
    static getAll(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = new userRepository_1.UserRepository(db_1.default);
            const allUsers = yield userRepository.all();
            res.status(200).json({
                status: 200,
                data: allUsers,
            });
        });
    }
}
exports.UserController = UserController;
// export const getAll = async () => {};
// export const getUserById = async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   try {
//     const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
//     if (rows.length > 0) {
//       res.json(rows[0]);
//     } else {
//       res.status(404).send('User not found');
//     }
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };
// export const createUser = async (req: Request, res: Response) => {
//   const newUser: User = req.body;
//   try {
//     const [result] = await pool.query('INSERT INTO users SET ?', [newUser]);
//     res.status(201).json({ id: (result as any).insertId, ...newUser });
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };
