import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  notes: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public alertCtrl: AlertController) {}

  ionViewDidLoad() {  	

  	this.notes.push(
  		{
  			date: this.navParams.get('date'),
	  		totalSale: this.navParams.get('totalSale'),
	  		cash: this.navParams.get('cash'),
	  		debit: this.navParams.get('debit'),
	  		gcBuy: this.navParams.get('gcBuy'),
	  		gcRedeem: this.navParams.get('gcRedeem'),
	  		exp: this.navParams.get('exp'),
	  		otherInc: this.navParams.get('otherInc')
  		}
  	);
  }

    deleteNote(note){
 
        let index = this.notes.indexOf(note);
 
        if(index > -1){
            this.notes.splice(index, 1);
        }
    }
  
}
