import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/service/budget.service';

@Component({
  selector: 'app-enter-expenses',
  templateUrl: './enter-expenses.component.html',
  styleUrls: ['./enter-expenses.component.css']
})
export class EnterExpensesComponent implements OnInit{
  nameExpensive: string;
  amount: number;
  formIncorrect: boolean;
  textIncorrect: string;

  constructor(
    private _budgetService: BudgetService,
  ){
    this.nameExpensive = '';
    this.amount = 0;
    this.formIncorrect = false;
    this.textIncorrect = '';
  }

  ngOnInit(): void {

  }

  addExpensive(){

    if(this.amount > this._budgetService.remaining){
      this.formIncorrect = true;
      this.textIncorrect = 'The amount entered is greater than the remaining';
      return;
    }


    if(this.nameExpensive === '' || this.amount <= 0){
      this.formIncorrect = true;
      this.textIncorrect = 'Name expensive or amount incorrect';
    } else {
      //Create Object
      const EXPENSE = {
        name: this.nameExpensive,
        amount: this.amount,
      }
      //Send Object to subscribe
      this._budgetService.addExpensive(EXPENSE);
      console.log(this._budgetService);

      //reset form
      this.formIncorrect = false;
      this.nameExpensive = '';
      this.amount = 0;
    }
  }
}
