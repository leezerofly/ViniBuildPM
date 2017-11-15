import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MeetingPage } from '../pages/meeting/meeting';
import { TaskPage } from '../pages/task/task';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QuestionPage } from '../pages/question/question';
import { DebatePage } from '../pages/debate/debate';
import { Fabs } from '../pages/Fabs/Fabs';


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
    Fabs

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
    Fabs

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
