import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === 'asc') {
      // return value.map(e => e.code).sort();
      return value.sort(function(a, b) {
        return a.code > b.code;
      });
      // return value.sort();
    } else if (args === 'desc') {
      return value.sort(function(a, b) {
        return a.code < b.code;
      }).reverse();
    }
  }
}
