import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {
  i:any={
    // "charNum":"0"
  };
  character; //?
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
      this.i=JSON.stringify(params.data.characterNum);
      console.log("i="+this.i);
      // console.log("iiii"+this.i.charNum);
      var charactes = [
        {
          name: '朱丽叶',
          quote: '2017/11/8',
          //  image: 'assets/imgs/logo.png',
          items:'舌尖上的中国'
        },
        {
          name: '罗密欧',
          quote: '2014/6/8',
           // image: 'assets/imgs/logo.png',
          items: '单反'
        },
        {
          name: '徐霞客',
          quote: '2017/6/4',
          //  image: 'assets/imgs/logo.png',
          items:'徐霞客游记'
        }, {
          name: '鲁迅',
          quote: '2017/11/8',
          //  image: 'assets/imgs/logo.png',
          items:'背影'
        },
        {
          name: '俞敏洪',
          quote: '2017/11/8',
          //  image: 'assets/imgs/logo.png',
          items:'新东方'
        },
        {
          name: '雷军',
          quote: '2017/11/8',
          //  image: 'assets/imgs/logo.png',
          items:'小米'
        }


      ];
    // console.log("charNum:"+this.i);
      this.character = charactes[this.i];
    }

  
    dismiss() {
      this.viewCtrl.dismiss();
    }

}