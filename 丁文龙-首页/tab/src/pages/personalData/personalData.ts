import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';


import { NoticePage } from '../notice/notice';
import {UserDataPage} from '../user-data/user-data';
import { MeetingPage } from '../meeting/meeting';
import { TaskPage } from '../task/task';

import { HomePage } from '../home/home';

import { DiscussPage } from '../discuss/discuss';
import { QuestionPage } from '../question/question';
/**
 * Generated class for the PersonalDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-data',
  templateUrl: 'personalData.html',
})
export class PersonalDataPage {
  @ViewChild(Nav) nav: Nav;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openModa(){
    this.navCtrl.push(MeetingPage);
  }

  openPage1(){
    this.navCtrl.push(UserDataPage);
  }

  openPage2(){
    this.navCtrl.push(NoticePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalDataPage');
  }

 
}
