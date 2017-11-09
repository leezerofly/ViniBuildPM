import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  navigation: string = "home";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');

  }

  items = [
    '标题1',
    '标题2',
    '标题3',
    '标题4',
    '标题5',
    '标题6',
    '标题7',
    '标题8',
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}

@Component({
  template: `
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Music" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Movies" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Games" [root]="rootPage"></ion-tab>
    </ion-tabs>
`})
export class BasicPage {
  rootPage = HomePage;
}
