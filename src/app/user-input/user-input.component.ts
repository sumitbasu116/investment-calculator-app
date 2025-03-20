import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { UserInput } from './userInput.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  enteredIntialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn ='6';
  enteredDuration ='10';

  @Output() submitInput=new EventEmitter<UserInput>();

  onSubmit() {
    this.submitInput.emit({
      intialInvestment: Number(this.enteredIntialInvestment),
      annualInvestment: Number(this.enteredAnnualInvestment),
      expectedReturn: Number(this.enteredExpectedReturn),
      duration: Number(this.enteredDuration),
    });
  }

}
