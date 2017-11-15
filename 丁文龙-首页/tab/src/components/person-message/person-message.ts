import { Component } from '@angular/core';

/**
 * Generated class for the PersonMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'person-message',
  templateUrl: 'person-message.html'
})
export class PersonMessageComponent {

  text: string;

  constructor() {
    console.log('Hello PersonMessageComponent Component');
    this.text = 'Hello World';
  }

  // openModa(){
  //   this.navCtrl.push(MeetingPage);
  // }

  // openModa1(){
  //   this.navCtrl.push(UserDataPage);
  // }

}
