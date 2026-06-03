import { NgModule } from '@angular/core';
import { JobComponent } from './Job.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: JobComponent
}];

@NgModule({
  declarations: [JobComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class JobModule { }
