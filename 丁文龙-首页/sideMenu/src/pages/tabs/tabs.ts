import { Component,ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { TaskPage } from '../task/task';
import { MeetingPage } from '../meeting/meeting';
import { DiscussPage } from '../discuss/discuss';
import { UserPage } from '../user/user';
import { QuestionPage } from '../question/question';
import  { Tabs }         from 'ionic-angular';

@Component({
    selector:'tabs-component',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabRef:Tabs;
  tab1Root = HomePage;
  tab2Root = TaskPage;
  tab3Root = MeetingPage;
  tab4Root = DiscussPage;
  tab5Root = QuestionPage;
  tab6Root =UserPage;

  constructor() {

  }
  ionViewDidEnter(){
    let mainTabs = this.tabRef;
    mainTabs.select(1);

}
