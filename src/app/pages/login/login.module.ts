import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

import { LoginComponent } from './login.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class LoginModule { }
