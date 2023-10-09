
// Encontramos un decorador @Injectable  que nos permite inyectar el servicio en otros componente y hacer uso de su logica
// ng g s services/store

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  private carrito: Product[] = [];
  private myCarrito = new BehaviorSubject<Product[]>([]);   // es un observable que trae un array de productos y lo incializamos vacio

  myCarrito$ =this.myCarrito.asObservable();     // Patron observable (escucha activamente cambios, esta es la implementacion)

  constructor() { }


  addProduct( product: Product){
    this.carrito.push(product);
    this.myCarrito.next(this.carrito);

  }

  getTotal(){
    return this.carrito.reduce((sum,item) => sum + item.price,0)
  }


  getCarrito(){
    return this.carrito;
  }


}


// Pasos para el observable:
// Importar : import { BehaviorSubject } from 'rxjs';
// Declarar :   private myCarrito = new BehaviorSubject<Product[]>([]);
// Escuchar:   myCarrito$ =this.myCarrito.asObservable();
// Cada vez que se haga un push  enviar estado del carrito :  this.myCarrito.next(this.carrito);
// El nav component es el que se suscribe y escucha los cambios

