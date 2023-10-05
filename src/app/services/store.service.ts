
// Encontramos un decorador @Injectable  que nos permite inyectar el servicio en otros componente y hacer uso de su logica
// ng g s services/store

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})

export class StoreService {
  private carrito: Product[] = [];


  constructor() { }


  addProduct( product: Product){
    return this.carrito.push(product);
  
  }
  
  getTotal(){
    return this.carrito.reduce((sum,item) => sum + item.price,0)
  }
  
  
  getCarrito(){
    return this.carrito;
  }
}


