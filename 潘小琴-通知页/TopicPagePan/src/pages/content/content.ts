import { Component } from '@angular/core';
import { NavController ,Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})

export class ContentPage {
    i:any={
      // "charNum":"0"
    };
    character;
      constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
      ) {
        this.i=JSON.stringify(params.data.characterNum);
        console.log("i="+this.i);
        // console.log("iiii"+this.i.charNum);
        var characters = [
          {
            name: '标题一',
            quote: 'Tom     2017/11/8',
            //  image: 'assets/imgs/logo.png',
            items:'与我相关'
          },
          {
            name: '标题二',
            quote: 'Gary      2017/11/18',
             // image: 'assets/imgs/logo.png',
            items: '与她相关'
          },
          {
            name: '标题三',
            quote: 'Tom      2017/11/18',
            //  image: 'assets/imgs/logo.png',
            items:'与你相关'
          }, {
            name: '标题四',
            quote: 'Tom      2017/11/18',
            //  image: 'assets/imgs/logo.png',
            items:'与我们相关'
          },
          {
            name: '标题五',
            quote: 'Anna      2017/11/18',
            //  image: 'assets/imgs/logo.png',
            items:'与你们相关'
          },
          {
            name: '标题六',
            quote: 'Alice      2017/10/01',
            //  image: 'assets/imgs/logo.png',
            items:'与他们相关'
          },
          {
            name: '标题七',
            quote: 'Seven      2017/10/18',
            //  image: 'assets/imgs/logo.png',
            items:'与他们相关'
          },
          {
            name: '标题八',
            quote: 'Sara      2017/10/18',
            //  image: 'assets/imgs/logo.png',
            items:'与他们相关'
          },
          {
            name: '标题九',
            quote: 'Ida      2017/11/17',
            //  image: 'assets/imgs/logo.png',
            items:'与他们相关'
          },
          {
            name: '标题十',
            quote: 'Pernila      2017/11/13',
            //  image: 'assets/imgs/logo.png',
            items:'与他们相关'
          }


          ,
          {
            name: '标题一',
            quote: 'Tom      2017/11/18',
            //  image: 'assets/imgs/logo.png',
            items:'与他们相关'
          },
          {
            name: '标题二',
            quote: 'Tom      2017/11/18',
            //  image: 'assets/imgs/logo.png',
            items:'与他们相关'
          },
          {
            name: '标题三',
            quote: 'Pernila      2017/11/13',
            //  image: 'assets/imgs/logo.png',
            items:'与他们相关'
          }




        ];
      // console.log("charNum:"+this.i);
        this.character = characters[this.i];
      }
  
    
      dismiss() {
        this.viewCtrl.dismiss();
      }

 }
