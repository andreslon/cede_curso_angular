import { NgModule } from '@angular/core'; 
import { WelcomePipe} from './pipes/welcome.pipe';
import { MaterialModule } from './../material.module'; 
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [ WelcomePipe, DialogComponent ], 
  entryComponents: [DialogComponent],
  imports:[MaterialModule],
  exports: [ WelcomePipe, DialogComponent]
})
export class SharedModule { 

}
