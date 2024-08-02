import { Request, Response } from 'express';
import { IUser } from '../interfaces/user';
import pool from '../data-access/db';
import { UserRepository } from '../data-access/userRepository';

export class UserController {
    static getAll = async (req: Request, res: Response) => {
        const userRepository = new UserRepository(pool);
        const allUsers = await userRepository.all();
        res.status(200).json({
            status: 200,
            data: allUsers
        })
    }

    // static create = async (req: Request, res: Response) => {
    //     const user: IUser = req.body;
    //     const userRepository = new UserRepository(pool);
    //     const createUser = await userRepository.create(user)
    //     res.status(200).json({
    //         status: 200,
    //         data: createUser
    //     })
    // }
}

// export const getAll = async (req: Request, res: Response) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM users');
//     res.json(rows);
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };

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