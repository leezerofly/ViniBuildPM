import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fabs',
  templateUrl: 'fabs.html'
})
export class FabsComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello FabsComponent Component');
  }

  openPage(){
    this.navCtrl.push('CreatTopicPage');
  }

  openMeeting(){
    this.navCtrl.push('MeetingPage');
  }

  openHome(){
    this.navCtrl.push('PersonalDataPage'); 
  }

  openTask(){
    this.navCtrl.push('TaskPage');
  }

  openQuestion(){
      this.navCtrl.push(QuestionPage);
  }

  openDiscuss(){
    this.navCtrl.push(DiscussPage);
  }
}
