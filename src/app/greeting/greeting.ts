import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-greeting',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {
  users = ["vijay","surya","karthik"];
  showMessage = true;
  status ="pending";
  isHighlighted = false;
  fontSize = 20;

}
