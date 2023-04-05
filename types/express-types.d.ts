import { Request } from "express"
import IUser from "../src/interfaces/IUser"
import ICategory from "../src/interfaces/ICategory"

declare module 'express-serve-static-core' {
  interface Request {
    user: Omit<IUser, 'password' | 'email'>,
    category: ICategory,
  }
}
