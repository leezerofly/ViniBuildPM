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
      { title: '个人资料', component: 'HomePage' },
      { title: '消息通知', component: 'TaskPage' },
      { title: '打卡系统', component: 'MeetingPage' }
    ]
  }

  openPage(page) {
    this.navCtrl.push(page.component)
    this.navCtrl.setRoot(page.component)
    // this.navCtrl.goToRoot(page.component)
  }
  
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
