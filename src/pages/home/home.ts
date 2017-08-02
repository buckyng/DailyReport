import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  myDate: String = new Date().toISOString();
	totalSale: number = 0;

	cash: number = 0;
	debit: number = 0;
	gcBuy: number = 0;
	gcRedeem: number = 0;
	exp: number = 0;
	otherInc: number = 0;
	
	resultText: String;  

  employees: any;

  constructor(public navCtrl: NavController, public storage: Storage, public modalCtrl: ModalController) {    
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
  
  public convertToNumber(event):number {  return +event; }

  customTrackBy(index: number, obj: any): any {
    return index;
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

  launchAboutPage() {
   let data = {
    date: this.myDate,
    totalSale: this.totalSale, 
    cash: this.cash, 
    debit: this.debit, 
    gcBuy: this.gcBuy, 
    gcRedeem: this.gcRedeem, 
    exp: this.exp, 
    otherInc: this.otherInc   
   };

   this.navCtrl.push(AboutPage, data);    
  }  

}
