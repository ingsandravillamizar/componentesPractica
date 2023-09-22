import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Store Mil';
  imgParent = ''   //Dejamos intencionalmente vacia para que en el hijo entre a error

  onLoaded(img:string){
    console.log('cargo imagen, comunicacion externa se entero el padre', img)
  }

}
