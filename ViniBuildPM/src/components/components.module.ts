import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';

import { PipesModule } from '../pipes/pipes.module';
import { FabsComponent } from './fabs/fabs';
import { NavbarComponent } from './navbar/navbar';

@NgModule({
	declarations: [FabsComponent,
    NavbarComponent],
	imports: [PipesModule,IonicModule],
	exports: [FabsComponent,
    NavbarComponent]
})
export class ComponentsModule {}
