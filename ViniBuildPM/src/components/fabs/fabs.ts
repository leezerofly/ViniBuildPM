import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'fabs',
  templateUrl: 'fabs.html'
})
export class FabsComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello FabsComponent Component');
  }

  creatTopicPage(){
    this.navCtrl.push('topic-create');
  }
}
