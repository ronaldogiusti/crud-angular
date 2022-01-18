import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'H':
        return 'code';
      case 'He':
        return 'computer';
    }
    return 'code';
  }

}
