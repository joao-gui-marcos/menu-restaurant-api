import IProduct from '../interfaces/IProduct';
import productModel from '../models/Product.model';

class ProductService {
  constructor(private model = productModel) { }

  public getAllProduct(): IProduct[] {
    return this.model;
  }
}

export default ProductService;
