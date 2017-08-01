import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	input1: number = 0;
	input2: number = 0;
	totalSale: number = 0;

	cash: number = 0;
	debit: number = 0;
	gcBuy: number = 0;
	gcRedeem: number = 0;
	exp: number = 0;
	otherInc: number = 0;
	
	resultText: string;

  constructor(public navCtrl: NavController) {

  }

  public convertToNumber(event):number {  return +event; }
  
  getResult() {
  	this.totalSale = this.input1 + this.input2;
  	var result = this.totalSale + this.otherInc - this.exp + (this.gcBuy - this.gcRedeem - this.debit) / 1.13 - this.cash;
  	if(result < 0) {
  		this.resultText = "OK"
  	} else {
  		this.resultText = "Thieu " +result.toString()
  	}
  
  }

}
