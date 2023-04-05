import IUser from '../interfaces/IUser';
import userModel from '../models/User.model';
import { createJWT } from '../utils/JWT.functions';

class UserService {
  constructor(private model = userModel) {}

  public getAllUsers(): IUser[] {
    return this.model;
  }

  public login(userData: Omit<IUser, 'id' | 'name'>) {
    const users = this.model;
    const findUser = users.find((user) => {
      return user.email === userData.email && user.password === userData.password;
    });

    if(!findUser) return false;

    const { id, name } = findUser;

    return createJWT({ id, name });
  }
}

export default UserService;
