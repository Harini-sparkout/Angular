import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPipeNamePipe } from './custom-pipe-name-pipe';
import { Child } from './child/child';
import { Observable, of } from 'rxjs';
import { PromiseComponent } from "./promise/promise";
import { Highlight} from './highlight';
import { User } from './user/user';



@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, CustomPipeNamePipe, Child, PromiseComponent,Highlight ,User],
  standalone:true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App{
  title='angular';
  userCount = 130;
  isLoggedIn = false;
  someValue= 'angular pipe';

  getWelcomeMessage(): string{
    return 'welcome back'
  }
 
  login(){
    this.isLoggedIn = true;
    
  }
  userName="harini";
  email:string ='vaishu';
  age:number= 0;
  selectColor:string ='';
 
showMessage = true;

fruits=['apple','orange','kiwi','pineapple']

role ='guest'

isActive = false;
isRed = true;

students =[
  {id:1,name:'harini'},
  {id:2,name:'hari'},
  {id:3,name:'dharun'}

];
trackByUserId(index:number,user:any){
  return user.id;


}
 employee ='vaishu';
 price=1700;
 today=new Date();

 student ={
  name:'hari',
  age:22,
  work:'IT employee'
 }




parentMessage:string ='hello from harini';
inputValue:string='';
handleDataFromChild(data:string){
  this.inputValue =  data;

}
Message$:Observable<string> =of('hello from asyn pipe');





}

