import { Sequelize } from 'sequelize-typescript';
import { User, Product } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '1022003230',
    database: 'erp',
    models: [User, Product],
});

export default sequelize;
