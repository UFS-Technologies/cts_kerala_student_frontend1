import { NgModule } from '@angular/core';
import { About_UsComponent } from './About_Us.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: About_UsComponent
}];

@NgModule({
  declarations: [About_UsComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class About_UsModule { }
