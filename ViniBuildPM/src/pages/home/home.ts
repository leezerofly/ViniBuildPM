import { Component } from '@angular/core';
import { NavController, IonicPage, Nav } from 'ionic-angular';
// import { AppProvider, AppGlobal } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    rootPage: any ='HomePage';
  
    pages: Array<{title: string, component: any}>;
  
    constructor(public navCtrl: NavController, public nav: Nav) {
      this.pages = [
        { title: '首页', component: 'HomePage' },
        { title: '任务', component: 'TaskPage' },
        { title: '会议', component: 'MeetingPage' },
        { title: '讨论', component: 'DiscussPage' },
        { title: '问题', component: 'QuestionPage' },
      ];
    }

    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }
    
} 
