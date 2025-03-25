import { Injectable, signal } from "@angular/core";
import { UserInput } from "./user-input/userInput.model";

@Injectable({providedIn:"root"})
export class InvestmentService{
    resultAnnualData=signal<{
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
      }[] | undefined>(undefined);
    calculateInvestmentResultsData(userInputData:UserInput) {
    
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
        this.resultAnnualData.set(annualData);
      }

}