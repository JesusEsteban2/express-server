import { Router } from 'express';
import { ProductController } from '../Controllers/product-controller.js';

export const productRouter = Router();
const productController = new ProductController();

productRouter.get('/', productController.readAll);
productRouter.get('/:id', productController.read);
