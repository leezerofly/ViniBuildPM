import { Component , ViewChild} from '@angular/core';

import {NavController, Nav} from 'ionic-angular';
import {HomePage} from "../home/home";
import { TaskPage } from '../task/task';
// import { MeetingPage } from '../meeting/meeting';
// import { DiscussPage } from '../discuss/discuss';
// import { QuestionPage } from '../question/question';


@Component({
  selector: 'page-about',
  templateUrl: 'menu.html'
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: '首页', component: HomePage },
      { title: '任务', component: TaskPage },
      // { title: '会议', component:MeetingPage  },
      // { title: '讨论', component: DiscussPage },
      // { title: '问题', component: QuestionPage },
      // { title: 'Page Two', component: Page2 }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}