import { NgModule } from '@angular/core';
import { Contact_UsComponent } from './Contact_Us.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: Contact_UsComponent
}];

@NgModule({
  declarations: [Contact_UsComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class Contact_UsModule { }
