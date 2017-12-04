import { NgModule } from '@angular/core';
import { ViniPipe } from './vini/vini';
import { ViniBuildPipe } from './vini-build/vini-build';
@NgModule({
	declarations: [ViniPipe,
    ViniBuildPipe],
	imports: [],
	exports: [ViniPipe,
    ViniBuildPipe]
})
export class PipesModule {}
