import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeName',
  standalone:true
})
export class CustomPipeNamePipe implements PipeTransform {
constructor(private grade: Grade){}
  transform(mark: number):string {
    return this.grade.getGrade(mark);
  }


}
