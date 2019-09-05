import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonetransform',
})
export class PhonenumberPipe implements PipeTransform {

  transform(phone1: any, args?: any): any {
    let phone = phone1;
    let n1 = phone.toString().substring(0,3);
    let n2 = phone.toString().substring(3,6);
    let n3 = phone.toString().substring(6,10);

    return "(" + n1 + ")-" + n2 + "-" + n3;
  }

}
