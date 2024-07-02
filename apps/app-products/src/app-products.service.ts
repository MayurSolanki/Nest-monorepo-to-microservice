import { Product } from '@app/my-library/product.interface';
import { Injectable } from '@nestjs/common';



@Injectable()
export class AppProductsService {
  private products: Product[] = [];


  async getProducts(data: string = "") { 
    console.log('get_products_req',data);
    return this.products;
  }

  addProduct(name: string, price: number): void {
    const newProduct = { id: this.products.length + 1, name, price };
    this.products.push(newProduct);
  }

  
  
 
  getHello(): string {
    return 'Hello World! Product';
  }
}
