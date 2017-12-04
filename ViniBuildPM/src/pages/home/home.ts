import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { AppProvider, AppGlobal } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


    // @ViewChild(Nav) nav: Nav;
  
    // rootPage: any =PersonalDataPage;
  
    // pages: Array<{title: string, component: any}>;
  
    // constructor(public navCtrl: NavController) {
    //   // used for an example of ngFor and navigation
    //   this.pages = [
    //     { title: '首页', component:PersonalDataPage },
    //     { title: '任务', component: TaskPage },
    //     { title: '会议', component:MeetingPage  },
    //     { title: '讨论', component: DiscussPage },
    //     { title: '问题', component: QuestionPage },
    //   ];
    // }
    // openPage(page) {
    //   // Reset the content nav to have just this page
    //   // we wouldn't want the back button to show in this scenario
    //   this.nav.setRoot(page.component);
    // }
    
} 
