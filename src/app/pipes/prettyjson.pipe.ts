import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyjson'
})
export class PrettyjsonPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let result = JSON.stringify(value, null, 2)
    if (result != undefined) {
      result = result.replace(/ /g, '&nbsp;').replace(/\n/g, '<br/>');
    }
    return result
  }

}
