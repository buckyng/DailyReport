import { Component } from '@angular/core';
import { NavController, ModalController, AlertController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';
import { Posts } from '../../providers/posts';



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

  sales: any = [];

  constructor(public navCtrl: NavController, public storage: Storage, public modalCtrl: ModalController, private alertCtrl: AlertController, public postsService: Posts) {    
     
  }

  ionViewDidLoad() {
    this.postsService.load();
  }

 getResult() {
    var totalSale = 0;
    this.postsService.employees.forEach(function(employee) {
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
 

public convertToNumber(event):number { 
 return +event; 
 }

saveReport() {

   let alert = this.alertCtrl.create({
    title: 'Confirm',
    message: 'Do you want to save this transaction?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Confirm',
        handler: () => {
        var saleObj = {};
        saleObj['employeeSale'] = [];
        this.postsService.employees.forEach(function(employee) {
        	saleObj['employeeSale'][employee.name] = employee.sale;
        })

        saleObj['date']= this.myDate;
        saleObj['cash']= this.cash;
        saleObj['debit']= this.debit;
        saleObj['gcBuy']= this.gcBuy;
        saleObj['gcRedeem']= this.gcRedeem;
        saleObj['exp']= this.exp;
        saleObj['otherInc']= this.otherInc;

        this.sales.push(saleObj);  
          
        }
      }
    ]
  });  
  alert.present();
  console.log(this.sales)
  }
  //todo: save this sale 
}
