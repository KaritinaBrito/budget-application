import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { BillsComponent } from './components/bills/bills.component';

const routes: Routes = [
  { path: '', redirectTo: '/enter-budget', pathMatch: 'full' },
  { path: 'enter-budget', component: EnterBudgetComponent },
  { path: 'bills', component: BillsComponent },
  { path: '**', redirectTo: '/enter-budget', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
