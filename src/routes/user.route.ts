import { NextFunction, Request, Response, Router } from 'express';
import UserController from '../controllers/User.controller';
import AuthToken from '../middlewares/AuthToken';

const router = Router();
const userController = new UserController();
const authToken = new AuthToken();

router.get('/',
  (req: Request, res: Response, next: NextFunction) => authToken.verifyToken(req, res, next),
  (req: Request, res: Response) => userController.getAll(req, res));
router.post('/', (req: Request, res: Response) => userController.login(req, res))

export default router;
