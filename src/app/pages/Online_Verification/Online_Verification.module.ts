import { NgModule } from '@angular/core';
import { Online_VerificationComponent } from './Online_Verification.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: Online_VerificationComponent
}];

@NgModule({
  declarations: [Online_VerificationComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class Online_VerificationModule { }
