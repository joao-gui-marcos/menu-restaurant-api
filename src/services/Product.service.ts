import IProduct from '../interfaces/IProduct';
import productModel from '../models/Product.model';

class ProductService {
  constructor(private model = productModel) { }

  public getAllProduct(): IProduct[] {
    return this.model;
  }

  public getProduct(id: string): IProduct | undefined {
    return this.model.find(product => product.id === id);
  }
}

export default ProductService;
