import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'userinfo',
  templateUrl: 'userinfo.html'
})
export class Userinfo {

  gender: string[];  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gender=["性别","男","女"]
  }

}