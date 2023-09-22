import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit{
  @Input() img: string = 'valor inicial';
  @Input() titulo: string = 'My Store';


  @Output() loaded = new EventEmitter<string>();

  imageDefault = 'https://forestal.cafe/img/cafe/coffee.png'

  constructor() { }

  ngOnInit(): void{ }


  imgError(){
      console.log("Hubo un error al carga imagen,  cargo la imagen interna por defecto")
       this.img = this.imageDefault
  }

  imgLoaded(){
    console.log("cargo imagen correctamente:  comunicacion interna" )
    this.loaded.emit(this.img);  // trasmito la url para que el padre sepa cual se mostro
  }

}

