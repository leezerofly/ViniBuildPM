import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostMessagePage } from './post-message';

@NgModule({
  declarations: [
    PostMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(PostMessagePage),
  ],
})
export class PostMessagePageModule {}
