import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public alerCtrl: AlertController) {

  }

doSecondStep() {
    document.getElementById('firstStep').style.display='none';
    document.getElementById('secondStep').style.display='block';
}

dothirdStep(){
    document.getElementById('secondStep').style.display='none';
    document.getElementById('thirdStep').style.display='block';
}

returnFirstStep(){
    document.getElementById('firstStep').style.display='block';
    document.getElementById('secondStep').style.display='none';
}
}
