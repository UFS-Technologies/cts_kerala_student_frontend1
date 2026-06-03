import { NgModule } from '@angular/core';
import { Skill_DiplomaComponent } from './Skill_Diploma.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: Skill_DiplomaComponent
}];

@NgModule({
  declarations: [Skill_DiplomaComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class Skill_DiplomaModule { }
