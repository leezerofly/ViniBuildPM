import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TaskPage } from '../pages/task/task';
import { MeetingPage } from '../pages/meeting/meeting';
import { DiscussPage } from '../pages/discuss/discuss';
import { UserPage } from '../pages/user/user';
import { Fabs } from '../pages/fabs/fabs';
import { Top } from '../pages/top/top';
import { QuestionPage } from '../pages/question/question';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TaskPage,
    MeetingPage,
    DiscussPage,
    UserPage,
    QuestionPage,
    Top,
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
    TaskPage,
    MeetingPage,
    DiscussPage,
    UserPage,
    QuestionPage,
    Top,
    Fabs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
