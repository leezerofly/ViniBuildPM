import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatTopicPage } from './creat-topic';

@NgModule({
  declarations: [
    CreatTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatTopicPage),
  ],
})
export class CreatTopicPageModule {}
