import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';   //paso 1 para api

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent  implements OnInit {

  listaCarrito: Product[] = [];
  total = 0;
  products: Product[] = [];

  constructor( private _StoreService: StoreService ,
               private _ProductsService: ProductsService   )    //paso 2 para api  inyeccion de dependencia
  {
    this.listaCarrito = this._StoreService.getCarrito();
  }


   // paso 3 para api,  debe ir aqui porque es algo asincrono
  ngOnInit(): void {

     this._ProductsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    })

  }

  onAddToShoppingCart( product: Product){
     this._StoreService.addProduct(product);
     this.total = this._StoreService.getTotal();
  }

}
