import { MonentPipe } from './moment.pipe';
import { YesNoPipe } from './yesNo.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [MonentPipe, YesNoPipe],
    declarations: [MonentPipe, YesNoPipe],
    providers: [],
})
export class PipesModule { }
