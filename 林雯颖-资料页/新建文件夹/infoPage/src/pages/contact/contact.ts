import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public alerCtrl: AlertController) {

  }
  
  doAlert() {
    let alert = this.alerCtrl.create({
      title: '提示',
      message: '修改成功!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
