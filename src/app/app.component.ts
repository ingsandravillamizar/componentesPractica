import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Store Mil';
  imgParent = ''   //Dejamos intencionalmente vacia para que en el hijo entre a error
  showImg = true;



  onLoaded(img:string){
    console.log('cargo imagen, comunicacion externa se entero el padre', img)
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

}
