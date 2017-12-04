import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { AppProvider, AppGlobal } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string = "";
  password:string = "";
  constructor(
    public navCtrl: NavController,
    public appProvider: AppProvider) {

  }
  loginBtn(){
    let params = {
      username: this.username,
      password: this.password
    }
    this.appProvider.httpPost(AppGlobal.API.postLogin, params, rs => {
        this.appProvider.alert(rs.message);
        this.navCtrl.push('');
    },true)
  }

  goToOption():void{
    this.navCtrl.push('page-topic');
  }
} 
