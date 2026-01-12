import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
    users$: Observable<string[]> = new Observable(function (observer){
      setTimeout(function(){
        observer.next(['bala','suganthi','vijay']);
        observer.complete();
      },2000);
    })

    
}
