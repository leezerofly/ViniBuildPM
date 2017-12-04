import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'page-tab'
  }
)
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

    // personRoot = PersonalDataPage;
    homeRoot = 'HomePage' ;
    taskRoot = 'TaskPage';
    meetingRoot = 'MeetingPage';
    discussRoot = 'DiscussPage';
    questionRoot = 'QuestionPage';
}
