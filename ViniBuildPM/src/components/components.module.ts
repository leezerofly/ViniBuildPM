import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';

import { PipesModule } from '../pipes/pipes.module';
import { FabsComponent } from './fabs/fabs';
import { NavbarComponent } from './navbar/navbar';
import { MenuComponent } from './menu/menu';
@NgModule({
	declarations: [FabsComponent,
    NavbarComponent,
    MenuComponent],
	imports: [PipesModule,IonicModule],
	exports: [FabsComponent,
    NavbarComponent,
    MenuComponent]
})
export class ComponentsModule {}
