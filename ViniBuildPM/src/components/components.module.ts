import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';

import { PipesModule } from '../pipes/pipes.module';
import { FabsComponent } from './fabs/fabs';
@NgModule({
	declarations: [FabsComponent],
	imports: [PipesModule,IonicModule],
	exports: [FabsComponent]
})
export class ComponentsModule {}
