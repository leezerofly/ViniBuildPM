import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,Nav} from 'ionic-angular';

import { CreatTopicPage } from '../creat-topic/creat-topic';
import { PersonalDataPage } from '../personalData/personalData';
import { TaskPage } from '../task/task';
import { MeetingPage } from '../meeting/meeting';
import { DiscussPage } from '../discuss/discuss';
import { QuestionPage } from '../question/question';




@Component({
  selector: 'fabs',
  templateUrl: 'fabs.html'
})
export class Fabs { 
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  openPage(){
    this.navCtrl.push(CreatTopicPage);
  }

  openMeeting(){
    this.navCtrl.push(MeetingPage);
  }

  openHome(){
    this.navCtrl.push(PersonalDataPage); 
  }

  openTask(){
    this.navCtrl.push(TaskPage);
  }

  openQuestion(){
      this.navCtrl.push(QuestionPage);
  }

  openDiscuss(){
    this.navCtrl.push(DiscussPage);
  }

}
