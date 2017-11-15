import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { MeetingPage } from '../meeting/meeting';
import { TaskPage } from '../task/task';
import { HomePage } from '../home/home';
import { QuestionPage } from '../question/question';
import { DebatePage } from '../debate/debate';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MeetingPage;
  tab3Root = QuestionPage;
  tab4Root = DebatePage ;
  tab5Root = TaskPage;
  isAndroid: boolean = false;
  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
}
}
