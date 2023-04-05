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

  public updateProduct(id: string, updatedProduct: IProduct): IProduct | undefined {
    const index = this.model.findIndex(product => product.id === id);
    if (index === -1) {
      return undefined; // product not found
    }
    const { name, qty, price } = updatedProduct;
    if (!name || !qty || !price) {
      throw new Error('Invalid product structure');
    }
    const updated = {
      ...this.model[index],
      ...updatedProduct,
      id,
    };
    this.model[index] = updated;
    return updated;
  }

}

export default ProductService;
