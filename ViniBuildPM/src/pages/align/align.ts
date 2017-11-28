import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,Nav} from 'ionic-angular';

import {UserDataPage} from '../user-data/user-data';
import { NoticePage } from '../notice/notice';

@Component({
    selector: 'align',
    templateUrl: 'align.html'
  })
  export class Align { 
    @ViewChild(Nav) nav: Nav;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    openUser(){
      this.navCtrl.push(UserDataPage);
    }
  
    openMessage(){
      this.navCtrl.push(NoticePage);
    }
  
}  