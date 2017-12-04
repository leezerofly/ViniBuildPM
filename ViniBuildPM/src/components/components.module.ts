import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';

import { NavbarComponent } from './navbar/navbar';
import { PipesModule } from '../pipes/pipes.module';
import { FabsComponent } from './fabs/fabs';
@NgModule({
	declarations: [NavbarComponent,
    FabsComponent],
	imports: [PipesModule,IonicModule],
	exports: [NavbarComponent,
    FabsComponent]
})
export class ComponentsModule {}
