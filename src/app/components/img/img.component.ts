import { Component, OnInit, Input , Output, EventEmitter, OnChanges, AfterViewInit,OnDestroy, SimpleChanges, SimpleChange } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy  {

  img:string = ""
  @Input('img')     // convertimos el input en un set   compararlo con @Input() titulo: string = 'My Store'; para poder identificar los cambios solo de esta imagen
  set changeImg(newImg: string){
    this.img = newImg;
    console.log("Cambio la imagen =>", this.img ) //change just img
  }



  @Input() titulo: string = 'My Store';


  @Output() loaded = new EventEmitter<string>();

  imageDefault = 'https://forestal.cafe/img/cafe/coffee.png'

  counter = 0;
  counterFn: number | undefined;   //counter function

  constructor() {
    //before render
    // No correr aqui nada asincrono    No async
    // esto corre una sola vez          One time
    console.log('Constructor...', 'imgValue => ', this.img)
  }



  ngOnChanges(changes: SimpleChanges) {

    //before y durante render   corre antes y durante de Renderizarse
    //changes inputs    actuliza los cambios en los inputs
    // corre muchas veces, tantas veces como actulicemos los inputs   times
    console.log('ngOnchanges...', 'imgValue => ', this.img)
    console.log("imprimo los cambios", changes)
   }

   ngOnInit(): void {
    //  before render     corre antes de Renderizarse
    //  Aqui si podemos correr cosas async  -- fetch   ej llamar un api
    //  Corre una sola vez
    this.counterFn = window.setInterval( () =>{   //guardo en conuterFn
       this.counter +=1;
       console.log('run counter')
    }, 1000 );  //funcion que corre cada segundo y va incrementando el contador
    console.log('ngOnInit...', 'imgValue => ', this.img)
   }




   ngAfterViewInit() {
    // Corre de despues   after render
    //  handler children    :  Aqui se manejan los hijos.... manipularlos
   }

   ngOnDestroy() {
    // delete -- once time   cuando eliminamos el componente,  no lo vemos en la interface
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn)  //limpiar un intervalo es decir se detiene el contador
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

