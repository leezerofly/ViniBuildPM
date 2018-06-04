import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
// import { AppProvider, AppGlobal } from '../../providers/app/app';

import {Http} from "@angular/http";
import "rxjs/Rx";



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = '首页'
  items:any = []
  listDate = {}


  constructor(public navCtrl: NavController ,private http:Http) {}

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
      //  data => {console.log(data);}
        );
    console.log(this.listDate);
  }


    //打开帖子详情 暂时未创建 用登录页面代替
    detail() {
      this.navCtrl.push('ListDetailPage',{ 
        listDetail: this.listDate 
      });
    }
    


}
