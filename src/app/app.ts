import { CommonModule } from '@angular/common';
import { Component, OnInit ,OnChanges, Input, SimpleChanges} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPipeNamePipe } from './custom-pipe-name-pipe';
import { Child } from './child/child';
import { Observable, of } from 'rxjs';
import { PromiseComponent } from "./promise/promise";
import { Highlight} from './highlight';
import { User } from './user/user';
import { Greeting } from './greeting/greeting';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, CustomPipeNamePipe, Child, PromiseComponent,Highlight ,User,Greeting],
  standalone:true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App implements OnInit,OnChanges{
  title='angular';
  userCount = 130;
  isLoggedIn = false;
  someValue= 'angular pipe';
  name='suganthi';
  getWelcomeMessage(): string{
    return 'welcome back'
  }


  userName="aarthi";
  customer="ajith";
  email:string ='vaishu';
  age:number= 0;
  selectColor:string ='';
  userId="";
  password="";
 ngOnInit(): void{
  const storedLogin = sessionStorage.getItem('isLoggesIn');
  const storedUser = sessionStorage.getItem('customer');
  this.isLoggedIn = storedLogin === 'true';
  this.customer =  storedUser ?? this.customer;


  const savedLoginForm = localStorage.getItem('loginForm');
  if(savedLoginForm){
    const loginData = JSON.parse(savedLoginForm);
this.userId=loginData.userId;
this.password=loginData.password;


  }
 }
 saveLoginToLocal(): void{
  localStorage.setItem('loginForm',JSON.stringify({
    userId:this.userId,password:this.password
  }))
  alert('login data saved in local storage');
 }
   login():void{
    localStorage.setItem('loginForm',JSON.stringify({
      userId:this.userId,password:this.password
    }))
    this.isLoggedIn = true;
  
    sessionStorage.setItem('customer',this.customer);
    alert('form submitted and data saved')
  }

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
 show = true;
  @Input() parentData: string = 'Hello Lifecycle!';

  lifecycleMessages: string[] = [];
  ngOnChanges(changes: SimpleChanges) {
    this.lifecycleMessages.push('ngOnChanges called');

    if (changes['parentData']) {
      const change = changes['parentData'];
      this.lifecycleMessages.push(
        'Previous: ' + (change.previousValue !== undefined ? change.previousValue : 'none') +
        ', Current: ' + change.currentValue +
        ', First change: ' + change.firstChange
      );
    }
  }
  
ngDoCheck() {
    this.lifecycleMessages.push('ngDoCheck called');
  }

  ngAfterContentInit() {
    this.lifecycleMessages.push('ngAfterContentInit called');
  }
  ngAfterContentChecked() {
    this.lifecycleMessages.push('ngAfterContentChecked called');
  }
ngAfterViewInit() {
    this.lifecycleMessages.push('ngAfterViewInit called');
  }
ngAfterViewChecked() {
    this.lifecycleMessages.push('ngAfterViewChecked called');
  }
 ngOnDestroy() {
    this.lifecycleMessages.push('ngOnDestroy called');
  }
  changeParentData() {
    this.parentData = 'Data changed at ' + new Date().toLocaleTimeString();
    this.lifecycleMessages.push('parentData changed manually');
}

}
