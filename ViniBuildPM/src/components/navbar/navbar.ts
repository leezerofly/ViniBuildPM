import { Component, Input } from '@angular/core';

import { ActionSheetController, Nav } from 'ionic-angular';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {
  @Input() title: string;

  pages: Array<{title: string, component: any}>;

  constructor(public nav: Nav, public actionsheetCtrl: ActionSheetController) {
    this.pages = [
      { title: '首页', component: 'HomePage' },
      { title: '任务', component: 'TaskPage' },
      { title: '会议', component: 'MeetingPage' },
      { title: '讨论', component: 'DiscussPage' },
      { title: '问题', component: 'QuestionPage' },
    ]
  }

  openPage(page) {
    this.nav.setRoot(page.component);
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
