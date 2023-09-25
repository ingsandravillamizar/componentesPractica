import { Component, OnInit, Input , Output, EventEmitter, OnChanges, AfterViewInit,OnDestroy } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy  {

  @Input() img: string = 'valor inicial';
  @Input() titulo: string = 'My Store';


  @Output() loaded = new EventEmitter<string>();

  imageDefault = 'https://forestal.cafe/img/cafe/coffee.png'

  constructor() {
    //before render
    // No correr aqui nada asincrono    No async
    // esto corre una sola vez          One time
    console.log('Constructor...', 'imgValue => ', this.img)
  }



  ngOnChanges() {

    //before y durante render   corre antes y durante de Renderizarse
    //changes inputs    actuliza los cambios en los inputs
    // corre muchas veces, tantas veces como actulicemos los inputs   times
    console.log('ngOnchanges...', 'imgValue => ', this.img)
   }

   ngOnInit(): void {
    //  before render     corre antes de Renderizarse
    //  Aqui si podemos correr cosas async  -- fetch   ej llamar un api
    //  Corre una sola vez
    console.log('ngOnInit...', 'imgValue => ', this.img)
   }

   ngAfterViewInit() {
    // Corre de despues   after render
    //  handler children    :  Aqui se manejan los hijos.... manipularlos
   }

   ngOnDestroy() {
    // delete -- once time   cuando eliminamos el componente,  no lo vemos en la interface
    console.log('ngOnDestroy');
  }

  imgError(){
      console.log("Hubo un error al carga imagen,  cargo la imagen interna por defecto")
       this.img = this.imageDefault
  }

  imgLoaded(){
    console.log("cargo imagen correctamente:  comunicacion interna" )
    this.loaded.emit(this.img);  // trasmito la url para que el padre sepa cual se mostro
  }

}

