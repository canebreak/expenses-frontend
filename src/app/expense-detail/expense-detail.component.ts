import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../model/expense';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {


  @Input()
  public expense: Expense;
  constructor() { }

  ngOnInit() {
  }

}
