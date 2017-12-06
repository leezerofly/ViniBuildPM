import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { PipesModule } from '../pipes/pipes.module';
import { FabsComponent } from './fabs/fabs';
import { NavbarComponent } from './navbar/navbar';
import { ListComponent } from './list/list';

@NgModule({
	declarations: [
        FabsComponent,
        NavbarComponent,
        ListComponent
    ],
    imports: [
        IonicModule,
        PipesModule
    ],
	exports: [
        FabsComponent,
        NavbarComponent,
        ListComponent
    ]
})
export class ComponentsModule {}
