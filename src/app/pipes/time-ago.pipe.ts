import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    return formatDistance(new Date(),value);
  }

}


// npm i date-fns  necesitamos importar esta libreria
// ng g p pipes/timeAgo  la idea de este pipe es que nos diga cuanto tiempo ha transcurrido
// se requiere importar :  import { formatDistance } from 'date-fns'
