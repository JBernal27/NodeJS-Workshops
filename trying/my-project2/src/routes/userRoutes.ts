import { Router } from 'express';
import { UserController } from '../controllers/userController';

const userRoutes = Router();

userRoutes.get('/', UserController.getAll);
// userRoutes.post('/create', UserController.create);

export default userRoutes;