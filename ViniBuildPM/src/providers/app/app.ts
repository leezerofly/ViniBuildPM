import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppGlobal {
    //缓存key的配置
    static cache: any = {
        slides: "_dress_slides",
        categories: "_dress_categories",
        products: "_dress_products"
    }
    //接口基地址
    static domain = "http://localhost:8008"

    //接口地址
    static API: any = {
        postLogin: '/v1/user/login'
    };
}

@Injectable()
export class AppProvider {

  constructor(public http: Http, 
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController, 
    private toastCtrl: ToastController, 
  ) { }

  ////
  //  扩展API方法
  ////

  httpGet(url, params, callback, loader: boolean = false) {
      let loading = this.loadingCtrl.create({});
      if (loader) {
          loading.present();
      }
      this.http.get(AppGlobal.domain + url + this.encode(params))
          .toPromise()
          .then(res => {
              let resData = res.json();
              if (loader) {
                  loading.dismiss();
              }
              callback(resData == null ? "[]" : resData);
          })
          .catch(error => {
              if (loader) {
                  loading.dismiss();
              }
              this.handleError(error);
          });
  }
  //  对GET参数进行编码
  private encode(params) {
    let str = '';
    if (params) {
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                let value = params[key];
                str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
            }
        }
        str = '?' + str.substring(0, str.length - 1);
    }
    return str;
  }

  httpPost(url, params, callback, loader: boolean = false) {
      let loading = this.loadingCtrl.create();
      if (loader) {
          loading.present();
      }
      let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
      let options = new RequestOptions({ headers: headers });
      this.http.post(AppGlobal.domain + url, this.urlencode(params), options)
          .toPromise()
          .then(res => {
              let resData = res.json();
              if (loader) {
                  loading.dismiss();
              }
              callback(resData == null ? "[]" : resData);
          }).catch(error => {
              if (loader) {
                  loading.dismiss();
              }
              this.handleError(error);
          });
  }
  //  对POST参数进行编码
  private urlencode(params) {
    let str = '';
    if (params) {
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                let value = params[key];
                str += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
            }
        }
        str = str.substring(0, str.length - 1);
    }
    return str;
  }

  private handleError(error: Response | any) {
      let msg = '';
      if (error.status == 400) {
          msg = '请求无效(code：404)';
          console.log('请检查参数类型是否匹配');
      }
      else if (error.status == 404) {
          msg = '请求资源不存在(code：404)';
          console.error(msg + '，请检查路径是否正确');
      }
      else if (error.status == 500) {
          msg = '服务器发生错误(code：500)';
          console.error(msg + '，请检查路径是否正确');
      }
      else{
        msg = '请求无响应';
        console.error(msg + '请求无响应');
      }
      console.log(error);
      if (msg != '') {
          this.toast(msg);
      }
  }

  alert(message, callback?) {
      if (callback) {
          let alert = this.alertCtrl.create({
              title: '提示',
              message: message,
              buttons: [{
                  text: "确定",
                  handler: data => {
                      callback();
                  }
              }]
          });
          alert.present();
      } else {
          let alert = this.alertCtrl.create({
              title: '提示',
              message: message,
              buttons: ["确定"]
          });
          alert.present();
      }
  }

  toast(message, callback?) {
      let toast = this.toastCtrl.create({
          message: message,
          duration: 2000,
          dismissOnPageChange: true,
      });
      toast.present();
      if (callback) {
          callback();
      }
  }

  setItem(key: string, obj: any) {
      try {
          let json = JSON.stringify(obj);
          window.localStorage[key] = json;
      }
      catch (e) {
          console.error("window.localStorage error:" + e);
      }
  }
  getItem(key: string, callback) {
      try {
          let json = window.localStorage[key];
          let obj = JSON.parse(json);
          callback(obj);
      }
      catch (e) {
          console.error("window.localStorage error:" + e);
      }
  }

  

}
