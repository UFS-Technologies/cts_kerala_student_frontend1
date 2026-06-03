import { NgModule } from '@angular/core';
import { StudentComponent } from './Student.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: StudentComponent
}];

@NgModule({
  declarations: [StudentComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class StudentModule { }
