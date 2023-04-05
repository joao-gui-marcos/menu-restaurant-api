import Jwt, { SignOptions } from "jsonwebtoken";
import IUser from "../interfaces/IUser";

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const configJWT: SignOptions = { algorithm: 'HS256', expiresIn: '10h' };

export const createJWT = (payload: Omit<IUser, 'password' | 'email'>) => {
  console.log(payload);
  return Jwt.sign(payload, JWT_SECRET, configJWT);
}

export const verifyJWT = (token: string) => {
  console.log(token);
  return Jwt.verify(token, JWT_SECRET);
}
