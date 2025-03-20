import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInput } from './user-input/userInput.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'investment-calculator-app';

  printNameEntered(name:string){
    console.log("Inside app component "+name);
  }

  calculateInvestmentResults(userInputData:UserInput) {
    
    const annualData = [];
    let investmentValue = userInputData.intialInvestment;
  
    for (let i = 0; i < userInputData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInputData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInputData.annualInvestment;
      const totalInterest =
        investmentValue - userInputData.annualInvestment * year - userInputData.intialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInputData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userInputData.intialInvestment + userInputData.annualInvestment * year,
      });
    }
    console.log(annualData);
    return annualData;
  }
}