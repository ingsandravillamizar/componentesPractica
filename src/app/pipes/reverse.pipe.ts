import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string ): string {
     return value.split('').reverse().join(''); //  Para colocar una cadena al reves
  }

}


//ng g p pipes/reverse
// Para llamarlo  en el componente  <h1>{{producto.title | reverse  }}  </h1>
