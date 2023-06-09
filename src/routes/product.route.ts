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

router.post('/',
  (req: Request, res: Response, next: NextFunction) => authToken.verifyToken(req, res, next),
  (req: Request, res: Response) => productController.createProduct(req, res));

router.patch('/:id',
  (req: Request, res: Response, next: NextFunction) => authToken.verifyToken(req, res, next),
  (req: Request, res: Response) => productController.updateProduct(req, res));

router.delete('/:id',
  (req: Request, res: Response, next: NextFunction) => authToken.verifyToken(req, res, next),
  (req: Request, res: Response) => productController.deleteProduct(req, res));

export default router;
