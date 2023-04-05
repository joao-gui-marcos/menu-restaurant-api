import ICategory from '../interfaces/ICategory';
import categoryModel from '../models/Category.model';
import { createJWT } from '../utils/JWT.functions';

class CategoryService {
  constructor(private model = categoryModel) { }

  public getAllCategory(): ICategory[] {
    return this.model;
  }
}

export default CategoryService;
