import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,Nav} from 'ionic-angular';


import { NoticePage } from '../notice/notice';
import {UserDataPage} from '../user-data/user-data';

@Component({
    selector: 'rightIcon',
    templateUrl: 'rightIcon.html'
  })
  export class RightIcon { 
    @ViewChild(Nav) nav: Nav;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    openPage1(){
        this.navCtrl.push(UserDataPage);
      }
    
      openPage2(){
        this.navCtrl.push(NoticePage);
      }

  }  