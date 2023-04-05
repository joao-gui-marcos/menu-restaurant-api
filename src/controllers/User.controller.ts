import { Request, Response } from 'express';
import UserService from '../services/User.service';

class UserController {
  constructor(private service = new UserService()) { }

  public getAll(req: Request, res: Response) {
    const { id, name } = req.user!;
    return res.status(200).json({ id, name });
  }

  public login(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = this.service.login({ email, password });

    return res.status(200).json({ token });
  }
}

export default UserController;
