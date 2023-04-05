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

  public async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    const product = await this.service.getProduct(id);
    return res.status(200).json(product);
  }
}

export default ProductController;
