import { Component } from '@angular/core';
import { ModalController,NavController, Platform} from 'ionic-angular';
import{ContentPage} from '../content/content';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  notify: string = "assignMe";
  isAndroid: boolean = false;

  constructor(
    public  platform: Platform,
    public navCtrl: NavController,
    public modalCtrl:ModalController
  ) {
    this.isAndroid = platform.is('android'); 
  }

  openModal(characterNum) {
    
       this.navCtrl.push(ContentPage,{characterNum});
    
        // let modal = this.modalCtrl.create(ContentPage, characterNum);
        // modal.present();
      }
    
}
