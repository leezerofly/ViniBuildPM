import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html',
})
export class ListDetailPage {
   data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('listDetail');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDetailPage');
  }

}
