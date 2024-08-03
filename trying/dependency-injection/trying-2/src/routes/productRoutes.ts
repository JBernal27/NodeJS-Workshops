import { Router } from 'express';
import ProductController from '../controllers/productController';
import { authenticateJWT } from '../middlewares/authMiddleware';

export const productRouter = Router();

productRouter.get('/',authenticateJWT ,ProductController.getAllProducts);
productRouter.get('/:id', ProductController.getProductById);
productRouter.get('/user/:userId', ProductController.getProductsByUserId);
productRouter.post('/', ProductController.createProduct);
