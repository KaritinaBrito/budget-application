import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/service/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.css']
})
export class EnterBudgetComponent {
  amount: number;
  incorrectAmount: boolean;

  constructor(
    private _budgetService: BudgetService,
    private router: Router,
  ){
    this.amount = 0;
    this.incorrectAmount = false;
  }

  addBudget(){
    if(this.amount > 0){
      this.incorrectAmount = false;
      this._budgetService.budget = this.amount;
      this._budgetService.remaining = this.amount;
      this.router.navigate(['/bills'])
    }
    else {
      this.incorrectAmount = true;
    }
  }
}
