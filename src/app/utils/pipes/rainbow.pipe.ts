import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rainbow',
  pure: false
})
export class RainbowPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    console.log('Pipe Impure')
    if (!args || args.length <= 0) {
      return `🌈 ${value}🌈 `;
    } else {
      return `${args.join(' ')} ${value} ${args.join(' ')}`;
    }
  }
}
