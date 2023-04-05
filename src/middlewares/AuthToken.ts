import { NextFunction, Request, Response } from 'express';
import { verifyJWT } from '../utils/JWT.functions';
import IUser from '../interfaces/IUser';

export default class AuthToken {
  public verifyToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ error: 'Token not Found' });

    const decoded = verifyJWT(authorization);
    req.user = decoded as Omit<IUser, 'password' | 'email'>;

    return next();
  }
}
