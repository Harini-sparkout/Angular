import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [],
  templateUrl: './child.html',
 styleUrls: ['./child.css'],
})
export class Child {
message='i am harini sri';
showMessage(){
  alert(this.message);
}
 @Input() messageFromParent: string='';
 @Output() dataEmitter = new EventEmitter<string>();
 childData : string ='hello from angular';
 sendData(){
  this.dataEmitter.emit(this.childData);
 }

}
