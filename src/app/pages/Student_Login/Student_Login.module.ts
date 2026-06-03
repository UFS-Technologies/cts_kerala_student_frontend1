import { NgModule } from '@angular/core';
import { Student_LoginComponent } from './Student_Login.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: Student_LoginComponent
}];

@NgModule({
  declarations: [Student_LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class Student_LoginModule { }
