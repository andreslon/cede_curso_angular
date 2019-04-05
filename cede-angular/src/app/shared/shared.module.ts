import { NgModule } from '@angular/core'; 
import { WelcomePipe} from './pipes/welcome.pipe'
@NgModule({
  declarations: [ WelcomePipe ],
  imports: [
    
  ],
  exports: [WelcomePipe],
  providers:[ ]
})
export class SharedModule { }
