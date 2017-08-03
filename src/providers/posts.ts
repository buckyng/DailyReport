import { Injectable } from '@angular/core';

@Injectable()
export class Posts {

  myDate: String = new Date().toISOString();

  totalSale: number = 0;
  cash: number = 0;
  debit: number = 0;
  gcBuy: number = 0;
  gcRedeem: number = 0;
  exp: number = 0;
  otherInc: number = 0;

  resultText: String;  

  sales: any = [];

	employees: any = [];

  constructor() {
    
  }

  load() {
    this.employees = [
            {name: 'Thi', sale: 0},
            {name: 'Trizzee', sale: 0},
            {name: 'Mami', sale: 0},
            {name: 'Eva', sale: 0},
            {name: 'Michelle', sale: 0},
            {name: 'Trina', sale: 0},
            {name: 'Ivy', sale: 0}
    ];

  }
 
  
  getResult() {
    var totalSale = 0;
    this.employees.forEach(function(employee) {
      totalSale += employee.sale
    })
    this.totalSale = totalSale;
    var result = this.totalSale + this.otherInc - this.exp + (this.gcBuy - this.gcRedeem - this.debit) / 1.13 - this.cash;

    if(result < 0) {
      this.resultText = "OK"
    } else {
      this.resultText = "Thieu " +result.toFixed(2).toString()
    }  

  }
 
  
  

  
 

}
