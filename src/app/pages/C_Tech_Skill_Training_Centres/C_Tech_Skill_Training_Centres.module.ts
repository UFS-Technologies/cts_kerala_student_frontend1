import { NgModule } from '@angular/core';
import { C_Tech_Skill_Training_CentresComponent } from './C_Tech_Skill_Training_Centres.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: C_Tech_Skill_Training_CentresComponent
}];

@NgModule({
  declarations: [C_Tech_Skill_Training_CentresComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class C_Tech_Skill_Training_CentresModule { }
