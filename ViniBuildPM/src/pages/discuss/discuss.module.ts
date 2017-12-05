import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscussPage } from './discuss';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    DiscussPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscussPage),
    ComponentsModule,
    DirectivesModule
  ],
})
export class DiscussPageModule {}
