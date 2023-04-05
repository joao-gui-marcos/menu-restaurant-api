import { NextFunction, Request, Response, Router } from 'express';
import ProductController from '../controllers/Product.controller';
import AuthToken from '../middlewares/AuthToken';

const router = Router();
const productController = new ProductController();
const authToken = new AuthToken();

router.get('/',
  (req: Request, res: Response, next: NextFunction) => authToken.verifyToken(req, res, next),
  (req: Request, res: Response) => productController.getAll(req, res));

router.get('/:id',
  (req: Request, res: Response, next: NextFunction) => authToken.verifyToken(req, res, next),
  (req: Request, res: Response) => productController.getProduct(req, res));

export default router;
