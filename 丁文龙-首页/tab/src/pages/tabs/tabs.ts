import { Component } from '@angular/core';

import { TaskPage } from '../task/task';
import { MeetingPage } from '../meeting/meeting';
import { HomePage } from '../home/home';
import { DiscussPage } from '../discuss/discuss';
// import { PersonalDataPage } from '../personalData/personalData';


import { QuestionPage } from '../question/question';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

//  homeRoot = PersonalDataPage;
  homeRoot = HomePage ;
  taskRoot = TaskPage;
  meetingRoot = MeetingPage;
  discussRoot = DiscussPage;
  questionRoot = QuestionPage;



  constructor() {

  }
}
