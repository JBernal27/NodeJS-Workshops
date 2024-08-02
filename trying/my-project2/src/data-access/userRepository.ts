import { Pool } from "mysql2/promise";
import { IUser } from "../interfaces/user";

export class UserRepository{
    constructor(private pool:Pool){}

    async all(){
        try {
            const [rows] = await this.pool.query('SELECT * FROM users');
            return rows
        }
        catch (error) {
            console.warn(`Server Error ${error}`)
        }
    }

    // async create(user: IUser) {
    //     try {
    //       const [result] = await this.pool.query('INSERT INTO users(name, email) VALUES (?, ?)', [user.name, user.email]);
    //       const insertId = (result as any).insertId;
    //       const [rows] = await this.pool.query('SELECT * FROM users WHERE id = ?', [insertId]);
    //       return rows;
    //     } catch (error) {
    //       console.warn(`Server Error: ${error}`);
    //       throw error;
    //     }
    //   }
}