import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Nav } from 'ionic-angular';
// import { AppProvider, AppGlobal } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string = '首页'

  constructor(public navCtrl: NavController) {

  }
}
