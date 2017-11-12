import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

constructor(public alerCtrl: AlertController,public navCtrl: NavController) {
 
}


toSecondStep() {
  document.getElementById('first').style.display='none';
  document.getElementById('second').style.display='block';
}

toThirdStep() {
  document.getElementById('second').style.display='none';
  document.getElementById('third').style.display='block';
}

returnFirstStep(){
  document.getElementById('first').style.display='block';
  document.getElementById('second').style.display='none';
}

}
