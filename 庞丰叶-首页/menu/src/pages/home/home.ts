import { Component } from '@angular/core';
import { NavController,ViewController ,NavParams } from 'ionic-angular';
import { PersonPage } from '../person/person';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams) {     
  }
  dismiss() {
    this.viewCtrl.dismiss();
}
openPage1(){
  this.navCtrl.push(PersonPage);
}
}
