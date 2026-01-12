import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeName',
  standalone:true
})
export class CustomPipeNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
