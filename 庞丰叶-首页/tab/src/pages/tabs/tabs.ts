import { Component } from '@angular/core';

import { MeetingPage } from '../meeting/meeting';
import { TaskPage } from '../task/task';
import { HomePage } from '../home/home';
import { QuestionPage } from '../question/question';
import { DebatePage } from '../debate/debate';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MeetingPage;
  tab3Root = QuestionPage;
  tab4Root = DebatePage ;
  tab5Root = TaskPage;

  constructor() {

  }
}
