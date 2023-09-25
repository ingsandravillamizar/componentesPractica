import { Component } from '@angular/core';

import { Product } from './models/product.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Store Mil';
  imgParent = ''   //Dejamos intencionalmente vacia para que en el hijo entre a error

  Products: Product[] =[
    {
      id   : '1',
      name : 'Yorki 3 meses',
      image : "./assets/images/Bebe1.jpeg",
      price: 1000000
    },

    {
      id   : '2',
      name : 'Yorki 3 meses',
      image : "./assets/images/Bebe2.jpeg",
      price: 1000000
    },

    {
      id   : '3',
      name : 'Yorki 3 meses',
      image : "./assets/images/Bebe3.jpeg",
      price: 1000000
    },
  ]


  onLoaded(img:string){
    console.log('cargo imagen, comunicacion externa se entero el padre', img)
  }

}
