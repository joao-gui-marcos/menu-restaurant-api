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

  public async createProduct(req: Request, res: Response) {
    const product = req.body
    try {
      const newProduct = await this.service.createProduct(product);
      return res.status(200).json(newProduct);
    } catch (err) {
      return res.status(400).json({ error: "Invalid product structure" });
    };
  }
}

export default ProductController;
