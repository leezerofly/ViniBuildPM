import { Component, ViewChild } from '@angular/core';
import {NavController, Nav} from 'ionic-angular';


@Component({
  selector: 'fabs',
  templateUrl: 'fabs.html'
})
export class Fabs { 
  @ViewChild(Nav) nav: Nav;

  openPage(CreatTopicPage) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(CreatTopicPage.component);
  }

}
