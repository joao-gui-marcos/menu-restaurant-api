import { Request, Response } from 'express';
import ProductService from '../services/Product.service';

class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public async getAll(req: Request, res: Response) {
    const products = await this.service.getAllProduct();
    return res.status(200).json(products);
  }
}

export default ProductController;
