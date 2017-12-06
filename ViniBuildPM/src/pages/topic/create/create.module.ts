import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePage } from './create';
import { ComponentsModule } from '../../../components/components.module';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    CreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePage),
    ComponentsModule,
    DirectivesModule
  ],
})
export class CreatePageModule {}
