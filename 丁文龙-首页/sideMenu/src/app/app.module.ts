import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MeetingPage } from '../pages/meeting/meeting';
import { DiscussPage } from '../pages/discuss/discuss';
import { QuestionPage } from '../pages/question/question';
import { UserPage } from '../pages/user/user';
import { Fabs } from '../pages/fabs/fabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MeetingPage,
    DiscussPage,
    QuestionPage,
    UserPage,
    Fabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MeetingPage,
    DiscussPage,
    QuestionPage,
    UserPage,
    Fabs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
