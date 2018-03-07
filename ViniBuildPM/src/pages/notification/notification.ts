import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  pet : string  = "MyTopic";
  TopicPet :string = "createTopic";
  MessagePet : string = "MessageList"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
