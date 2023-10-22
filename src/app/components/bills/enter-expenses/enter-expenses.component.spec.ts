import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterExpensesComponent } from './enter-expenses.component';

describe('EnterExpensesComponent', () => {
  let component: EnterExpensesComponent;
  let fixture: ComponentFixture<EnterExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterExpensesComponent]
    });
    fixture = TestBed.createComponent(EnterExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
