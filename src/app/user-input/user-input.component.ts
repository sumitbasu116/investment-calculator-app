import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

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

  onSubmit() {
    console.log(this.enteredIntialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
  }

}
