import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { PersonPage } from '../person/person';
@Component({
  selector: 'page-debate',
  templateUrl: 'debate.html'
})
export class DebatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  openPage1(){
    this.navCtrl.push(PersonPage);
  }

  
}
