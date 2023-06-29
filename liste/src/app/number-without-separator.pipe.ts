import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWithoutSeparator'
})
export class NumberWithoutSeparatorPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value) {
      return value.toLocaleString('en-US').replace(/,/g, '_');
    }
    return '';
  }

}
