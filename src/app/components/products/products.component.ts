import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent  implements OnInit {

   listaCarrito: Product[] = [];
  total = 0;
  Products: Product[] =[
    {
      id   : '1',
      name : 'Yorki 1 meses',
      image : "./assets/images/Bebe1.jpeg",
      price: 1000000
    },

    {
      id   : '2',
      name : 'Yorki 2 meses',
      image : "./assets/images/Bebe2.jpeg",
      price: 1100000
    },

    {
      id   : '3',
      name : 'Yorki 3 meses',
      image : "./assets/images/Bebe3.jpeg",
      price: 1200000
    },
    {
      id   : '4',
      name : 'Yorki 4 meses',
      image : "./assets/images/Bebe1.jpeg",
      price: 1300000
    },
    {
      id   : '5',
      name : 'Yorki 5 meses',
      image : "./assets/images/Bebe2.jpeg",
      price: 1400000
    },

    {
      id   : '6',
      name : 'Yorki 3 meses',
      image : "./assets/images/Bebe3.jpeg",
      price: 1000000
    },
  ]

  constructor(private _StoreService: StoreService )
  {
    this.listaCarrito = this._StoreService.getCarrito();   
  }


  ngOnInit(): void {

  }

  onAddToShoppingCart( product: Product){
     this._StoreService.addProduct(product);
     this.total = this._StoreService.getTotal();
  }

}
