import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';     // para suscribirese al carrito


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false
  counter = 0;
  constructor(private _StoreService: StoreService ){}   // para suscribirese al carrito

  ngOnInit(): void {

    //   // para suscribirese al carrito  cada vez que se tenga un cambio va a estar actulizado
    this._StoreService.myCarrito$.subscribe( products => {
      this.counter = products.length;
    })

  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
