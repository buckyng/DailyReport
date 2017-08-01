import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  notes: any = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

   addNote(){
 
        let prompt = this.alertCtrl.create({
            title: 'Add Name',
            inputs: [{
                name: 'title'
            }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: data => {
                        this.notes.push(data);
                    }
                }
            ]
        });
 
        prompt.present();
    }
 
    editNote(note){
 
        let prompt = this.alertCtrl.create({
            title: 'Edit Name',
            inputs: [{
                name: 'title'
            }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        let index = this.notes.indexOf(note);
 
                        if(index > -1){
                          this.notes[index] = data;
                        }
                    }
                }
            ]
        });
 
        prompt.present();       
 
    }
 
    deleteNote(note){
 
        let index = this.notes.indexOf(note);
 
        if(index > -1){
            this.notes.splice(index, 1);
        }
    }

}
