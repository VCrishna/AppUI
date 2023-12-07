// src/app/pipes/filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter || !filter.key || !filter.value) {
      return items;
    }

    return items.filter((item) => item[filter.key] === filter.value);
  }
}
