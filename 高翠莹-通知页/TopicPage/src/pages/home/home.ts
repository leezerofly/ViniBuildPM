import { Component } from '@angular/core';
import { NavController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string = "MyTopic";
  TopicPet: string = "createTopic";
  MessagePet: string = "MessageList";

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController) {

  }
  openModal(characterNum) {
        console.log("i:"+characterNum);
        this.navCtrl.push(ItemsPage, {characterNum});
      }
}

