import { Component, Input } from '@angular/core';

import { ActionSheetController, NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {
  // rootPage = 'HomePage'

  @Input() title: string

  username: any = 'username'
  pages: Array<{title: string, component: any}>

  constructor(public nav: Nav,public navCtrl: NavController, public actionsheetCtrl: ActionSheetController) {
    this.pages = [
      { title: '个人资料', component: 'UserPage' },
      { title: '消息通知', component: 'TaskPage' },
      { title: '打卡系统', component: 'MeetingPage' }
    ]
  }

  openPage(page) {
    this.navCtrl.push(page.component)
    // this.navCtrl.setRoot(page.component)
    // this.navCtrl.goToRoot(page.component)
  }
}
