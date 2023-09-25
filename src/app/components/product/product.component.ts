import { Component, OnInit, Input } from '@angular/core';
import { Product} from '../../models/product.model'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() producto: Product = {
    id   : '',
    name : '',
    image : "",
    price: 0
  }

  constructor(){}

  ngOnInit(): void {

  }
}


// ng  g c components/product
// creamos una carpeta models al mismo nivel de components
// creamos una interface del tipado de productos

    // definimos un array tipo   Products: Product[] =[ donde el proposito es enviar desde el padre los productos
    // por tanto en el html de component encontramos:
    //<app-product [producto]="product" *ngFor="let product of Products "></app-product>
    //  asi lo enviamos   [producto]="product"
    //  asi enviamos cada uno de los elementos  *ngFor="let product of Products


    // En el componente de productos tenemos que importar el modelo
    // import { Product} from '../../models/product.model'  y el input  ...Input } from '@angular/core';

       // @Input() producto: Product = {
       //   id   : '',
       //   name : '',
       //   image : "",
       //   price: 0
       // }


