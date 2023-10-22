import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/service/budget.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  budget: number;
  remaining: number;
  listExpenses: any[] = [];

  constructor(
    private _budgetService: BudgetService,
  ){
    this.budget = 0;
    this.remaining = 0;
    this.subscription = this._budgetService.getExpenses().subscribe(data => {
      console.log(data);
      this.remaining = this.remaining - data.amount;
      this.listExpenses.push(data);
    })
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.remaining = this._budgetService.remaining;
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  applyColor(){
    if(this.budget/4 > this.remaining) {
      return 'alert alert-danger';
    } else if(this.budget/2 > this.remaining){
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }
}
