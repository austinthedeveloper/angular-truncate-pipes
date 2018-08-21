import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'words'
})
export class WordsPipe implements PipeTransform {
  transform(value: string, args: number = 4): string {
    let res = value;
    if (value && args > 0) {
      const valueWords = value.split(/\s+/);
      if (valueWords.length > args) {
        res = valueWords.slice(0, args).join(' ') + '…';
      }
    }
    return res;
  }
}
