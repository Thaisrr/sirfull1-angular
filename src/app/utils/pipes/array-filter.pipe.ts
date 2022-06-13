import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter',
  pure: true
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: {name: string}[], filter?: string): { name: string }[] {
    console.log('Pipe pur');
    if(!filter) return value;
    else return value.filter(fruit => fruit.name.includes(filter))
  }

}
