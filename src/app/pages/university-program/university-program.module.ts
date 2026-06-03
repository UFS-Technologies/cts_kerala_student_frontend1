import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import { Routes, RouterModule } from '@angular/router';
import { UniversityProgramComponent } from './university-program.component';


const routes: Routes = [
  { path: '', component: UniversityProgramComponent }
];

@NgModule({
  declarations: [UniversityProgramComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes)
  ]
})
export class UniversityProgramModule { }
