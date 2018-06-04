import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { LoginPage } from '../login/login'
//数据请求导入文件
import {Http} from "@angular/http";
import "rxjs/Rx";

import $ from 'jquery'
import { ChangeDetectorRef } from '@angular/core';   //刷新界面

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  //定义网络请求数据
  listDate = {};
  title: string = '任务';

  constructor(public navCtrl: NavController,public cd: ChangeDetectorRef, public navParams: NavParams,private http:Http) {
  }


  ionViewDidLoad(){                             //网络请求函数
 
   $.ajax({
     type:"POST",
     url: "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1",
     dataType:"json",
     success:function(data){
      console.log(data);
      this.listDate = data;
    }
   })

  }

    
  
    //打开帖子详情 暂时未创建 用登录页面代替
    detail() {
      this.navCtrl.push('ListDetailPage');
    }


     //打开登录界面
     openLogin() {
      // this.navCtrl.push('LoginPage');
      this.cd.detectChanges();  
      console.log("ok");
    }

}
