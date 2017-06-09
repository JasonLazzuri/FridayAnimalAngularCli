import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completeness'
})
export class CompletenessPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
