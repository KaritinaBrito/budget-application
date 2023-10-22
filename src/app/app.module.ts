import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './components/bills/bills.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { EnterExpensesComponent } from './components/bills/enter-expenses/enter-expenses.component';
import { ListExpensesComponent } from './components/bills/list-expenses/list-expenses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    EnterBudgetComponent,
    EnterExpensesComponent,
    ListExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
