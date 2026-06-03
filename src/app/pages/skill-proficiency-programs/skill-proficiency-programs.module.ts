import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import { Routes, RouterModule } from '@angular/router';
import { SkillProficiencyProgramsComponent } from './skill-proficiency-programs.component';


const routes: Routes = [
  { path: '', component: SkillProficiencyProgramsComponent }
];

@NgModule({
  declarations: [SkillProficiencyProgramsComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes)
  ]
})
export class SkillProficiencyProgramsModule { }
