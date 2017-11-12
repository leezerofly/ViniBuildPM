import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  notify: string = "assignMe";
  isAndroid: boolean = false;

  constructor(
    public  platform: Platform,
    public navCtrl: NavController
  ) {
    this.isAndroid = platform.is('android'); 
  }

}
