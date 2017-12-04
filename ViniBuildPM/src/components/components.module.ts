import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
	declarations: [NavbarComponent],
	imports: [PipesModule],
	exports: [NavbarComponent]
})
export class ComponentsModule {}
