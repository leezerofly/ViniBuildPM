import { Component } from '@angular/core';

import { TaskPage } from '../task/task';
import { MeetingPage } from '../meeting/meeting';
import { HomePage } from '../home/home';
import { DiscussPage } from '../discuss/discuss';
// import { MenuPage } from '..//menu/menu';

import { QuestionPage } from '../question/question';

// import { UserPage } from '../user/user';
// import { MenuPage } from '../menu/menu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  // menuRoot = MenuPage;
  homeRoot = HomePage;
  taskRoot = TaskPage;
  meetingRoot = MeetingPage;
  discussRoot = DiscussPage;
  questionRoot = QuestionPage;

  // menuRoot = MenuPage;
  
  // tabsMenu  = MenuPage;

  constructor() {

  }
}
