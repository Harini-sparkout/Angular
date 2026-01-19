import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Grade {

  getGrade(mark: number): string{
    if(mark >= 90) return 'A';
    if(mark>=75) return 'B';
     if(mark>=60) return 'C';
     return 'F';
  }
}
