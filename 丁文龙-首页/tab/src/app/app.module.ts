import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TaskPage } from '../pages/task/task';
import { MeetingPage } from '../pages/meeting/meeting';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DiscussPage } from '../pages/discuss/discuss';
import { QuestionPage } from '../pages/question/question';
import { NoticePage } from '../pages/notice/notice';
import { PersonalDataPage } from '../pages/personalData/personalData';
import { CreatTopicPage } from '../pages/creat-topic/creat-topic';
import {UserDataPage} from '../pages/user-data/user-data';


import { Fabs } from '../pages/fabs/fabs';
import { Align } from '../pages/align/align';
import { RightIcon } from '../pages/rightIcon/rightIcon';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TaskPage,
    MeetingPage,
    DiscussPage,
    QuestionPage,
    NoticePage,
    PersonalDataPage,
    CreatTopicPage,
    UserDataPage,


    Fabs,
    Align,
    RightIcon

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TaskPage,
    MeetingPage,
    DiscussPage,
    QuestionPage,
    NoticePage,
    PersonalDataPage,
    CreatTopicPage,
    UserDataPage,


    Fabs,
    Align,
    RightIcon

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
