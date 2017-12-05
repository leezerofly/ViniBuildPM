import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-discuss',
  templateUrl: 'discuss.html',
})
export class DiscussPage {
  title: string = '讨论'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
