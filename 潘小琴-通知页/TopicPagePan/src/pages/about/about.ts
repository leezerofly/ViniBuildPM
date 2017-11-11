import { Component } from '@angular/core';
import {  ModalController, Platform, NavParams, ViewController, NavController} from 'ionic-angular';
import{ContentPage} from '../content/content';
@Component({

  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  topic: string = "publish";
  isAndroid: boolean = false;

  constructor(
    public  platform: Platform,
    public navCtrl:NavController,
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
    
    // @Component({
    //   template: `
    // <ion-header>
    //   <ion-toolbar>
    //     <ion-title>
    //       话题详情
    //     </ion-title>

    //     <ion-buttons start>
    //       <button ion-button (click)="dismiss()">
    //         <span ion-text color="primary" showWhen="ios">Cancel</span>
    //         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
    //       </button>
    //     </ion-buttons>
    //   </ion-toolbar>
    // </ion-header>

    // <ion-content>

    //   <ion-list>
    //       <ion-item>
    //         <ion-avatar item-start>
    //           <img src="{{character.image}}">
    //         </ion-avatar>

    //         <h2>{{character.name}}</h2>
    //         <p>{{character.quote}}</p>
    //       </ion-item>


    //       <ion-item>
    //        <p>{{character.items}}</p>
    //       </ion-item>
    //   </ion-list>

    // </ion-content>
    // `
    // })

    // export class ContentPage {
    //   character;
    
    //   constructor(
    //     public platform: Platform,
    //     public params: NavParams,
    //     public viewCtrl: ViewController
    //   ) {
    //     var characters = [
    //       {
    //         name: 'Gollum',
    //         quote: '2017/11/8',
    //         image: '',
    //         items: '与我相关'
    //       },
    //       {
    //         name: 'Frodo',
    //         quote: '2014/6/8',
    //         image: '',
    //         items: '详情'
    //       },
    //       {
    //         name: 'Samwise Gamgee',
    //         quote: '2017/6/4',
    //         image: '',
    //         items:'详情'
    //       }
    //     ];
    //     this.character = characters[this.params.get('charNum')];
    //   }
    
    //   dismiss() {
    //     this.viewCtrl.dismiss();
    //   }
    // }