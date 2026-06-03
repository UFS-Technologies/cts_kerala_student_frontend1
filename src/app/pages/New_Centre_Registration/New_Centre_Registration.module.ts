import { NgModule } from '@angular/core';
import { New_Centre_RegistrationComponent } from './New_Centre_Registration.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: New_Centre_RegistrationComponent
}];

@NgModule({
  declarations: [New_Centre_RegistrationComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class New_Centre_RegistrationModule { }
