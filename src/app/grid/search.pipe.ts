import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
    transform(items: any[], filter: string): any[] {
        if (!items || !filter) {
            return items;
        }
        
        return items.filter(item => item.tags.indexOf(filter) !== -1);
    }
  }
  
