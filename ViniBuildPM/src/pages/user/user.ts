import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user : string = "userinfo"
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
}
