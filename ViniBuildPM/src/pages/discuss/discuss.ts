import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http} from "@angular/http";
import "rxjs/Rx";

@IonicPage()
@Component({
  selector: 'page-discuss',
  templateUrl: 'discuss.html',
})
export class DiscussPage {
  title: string = '首页'
  items:any = []
  listDate = {}

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
  }

  ionViewDidLoad(){                             //网络请求函数
    let _this = this;
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
    console.log(this.http.get(url))
    this.http.get(url).map(res => res.json()).subscribe(
          function(data){
            _this.listDate = data;
          },function (error){
               console.log(error);
            }      
        );
    console.log(this.listDate);
  }

    //打开帖子详情 暂时未创建 用登录页面代替
    detail() {
      this.navCtrl.push('LoginPage');
    }
}
