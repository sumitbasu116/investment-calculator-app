import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredName = '';
  enteredSurName = '';

  @Output() submitEventData=new EventEmitter<string>();

  onSubmit(){
    console.log("Inside onSubmit"+this.enteredName);
    this.submitEventData.emit(this.enteredName);
  }
}
