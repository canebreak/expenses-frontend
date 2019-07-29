import { Expense } from './../model/expense';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  public expenses: Expense[];
  constructor() { }

  ngOnInit() {

    this.expenses = [];
    let expense = new Expense(1, 23, 'CATEGORY','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

    this.expenses.push(expense);
    this.expenses.push(expense);
    this.expenses.push(expense);
    this.expenses.push(expense);
  }

}
