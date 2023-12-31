import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product} from '../../models/product.model'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() producto: Product = {
    id   : '',
    price: 0,
    image : "",
    title : '',
    category:'',
    description: '',

  }







  @Output() agregarProducto = new EventEmitter<Product>();

  constructor(){}

  ngOnInit(): void {

  }

  onClickComprar(){
    this.agregarProducto.emit(this.producto)

  }
}
