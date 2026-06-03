import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import { Routes, RouterModule } from '@angular/router';
import { SkillIdentityProgramsComponent } from './skill-identity-programs.component';


const routes: Routes = [
  { path: '', component: SkillIdentityProgramsComponent }
];

@NgModule({
  declarations: [SkillIdentityProgramsComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes)
  ]
})
export class SkillIdentityProgramsModule { }
