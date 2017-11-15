import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler ,Platform, ActionSheetController } from 'ionic-angular';
import { MyApp } from './app.component';

import { MeetingPage } from '../pages/meeting/meeting';
import { TaskPage } from '../pages/task/task';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QuestionPage } from '../pages/question/question';
import { DebatePage } from '../pages/debate/debate';
import { FabsPage } from '../pages/fabs/fabs';
import { PersonPage } from '../pages/person/person';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MeetingPage,
    TaskPage,
    HomePage,
    TabsPage,
    DebatePage,
    QuestionPage,
    FabsPage,
    PersonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MeetingPage,
    TaskPage,
    HomePage,
    TabsPage,
    DebatePage,
    QuestionPage,
    FabsPage,
    PersonPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
    constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
) { }
openMenu() {
  let actionSheet = this.actionsheetCtrl.create({
    title: 'Albums',
    buttons: [
{ text: 'Favorite',
icon: !this.platform.is('ios') ? 'heart-outline' : null,
handler: () => {
  console.log('Favorite clicked');
}
},
{
text: 'Cancel',
role: 'cancel', // will always sort to be on the bottom
icon: !this.platform.is('ios') ? 'close' : null,
handler: () => {
  console.log('Cancel clicked');
}
}
]
});
actionSheet.present();
}
}
