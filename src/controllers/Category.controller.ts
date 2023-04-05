import { Request, Response } from 'express';
import CategoryService from '../services/Category.service';

class CategoryController {
  private service: CategoryService;

  constructor() {
    this.service = new CategoryService();
  }

  public async getAll(req: Request, res: Response) {
    const categories = await this.service.getAllCategory();
    return res.status(200).json(categories);
  }
}

export default CategoryController;
