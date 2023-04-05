import { NextFunction, Request, Response, Router } from 'express';
import CategoryController from '../controllers/Category.controller';
import AuthToken from '../middlewares/AuthToken';

const router = Router();
const categoryController = new CategoryController();
const authToken = new AuthToken();

router.get('/',
  (req: Request, res: Response, next: NextFunction) => authToken.verifyToken(req, res, next),
  (req: Request, res: Response) => categoryController.getAll(req, res));

export default router;
