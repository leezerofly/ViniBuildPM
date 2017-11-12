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
          name: 'Gollum',
          quote: '2017/11/8',
          //  image: 'assets/imgs/logo.png',
          items:'与我相关'
        },
        {
          name: 'Frodo',
          quote: '2014/6/8',
           // image: 'assets/imgs/logo.png',
          items: '与她相关'
        },
        {
          name: 'Samwise Gamgee',
          quote: '2017/6/4',
          //  image: 'assets/imgs/logo.png',
          items:'与你相关'
        }, {
          name: 'Gollum',
          quote: '2017/11/8',
          //  image: 'assets/imgs/logo.png',
          items:'与我们相关'
        },
        {
          name: 'Gollum',
          quote: '2017/11/8',
          //  image: 'assets/imgs/logo.png',
          items:'与你们相关'
        },
        {
          name: 'Gollum',
          quote: '2017/11/8',
          //  image: 'assets/imgs/logo.png',
          items:'与他们相关'
        }


      ];
    // console.log("charNum:"+this.i);
      this.character = charactes[this.i];
    }

  
    dismiss() {
      this.viewCtrl.dismiss();
    }

}