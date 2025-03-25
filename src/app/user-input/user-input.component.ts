import { Component, output, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { UserInput } from './userInput.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  enteredIntialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn =signal('6');
  enteredDuration =signal('10');

  submitInput= output<UserInput>();

  onSubmit() {
    this.submitInput.emit({
      intialInvestment: Number(this.enteredIntialInvestment()),
      annualInvestment: Number(this.enteredAnnualInvestment()),
      expectedReturn: Number(this.enteredExpectedReturn()),
      duration: Number(this.enteredDuration()),
    });
  this.enteredIntialInvestment.set('0');
  this.enteredAnnualInvestment.set('0');
  this.enteredExpectedReturn.set('6');
  this.enteredDuration.set('10');
  }

}
