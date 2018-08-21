import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitcharacters'
})
export class SplitcharactersPipe implements PipeTransform {
  transform(value: string, args: number = 10): string {
    let res = value;
    if (value && value.length > args && args > 0) {
      const prefix = value.substring(0, args / 2);
      const postfix = value.substring(value.length - args / 2, value.length);
      res = `${prefix}...${postfix}`;
    }
    return res;
  }
}
