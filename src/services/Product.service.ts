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

  public createProduct(product: IProduct): IProduct {
    const id = this.model.length + 1;
    const { name, qty, price } = product;
    if (!name || !qty || !price) {
      throw new Error('Invalid product structure');
    }
    const newProduct = {
      ...product,
      id: id.toString(),
    };
    this.model.push(newProduct);
    return newProduct;
  }
}

export default ProductService;
