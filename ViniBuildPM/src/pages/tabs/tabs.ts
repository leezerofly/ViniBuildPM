import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  title: any = 'tabs'
  
  homeRoot = 'HomePage'
  taskRoot = 'TaskPage'
  meetingRoot = 'MeetingPage'
  discussRoot = 'DiscussPage'
  questionRoot = 'QuestionPage'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
