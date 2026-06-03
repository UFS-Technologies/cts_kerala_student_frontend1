import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import { Routes, RouterModule } from '@angular/router';
import { TradeCompetencyProgramsComponent } from './trade-competency-programs.component';


const routes: Routes = [
  { path: '', component: TradeCompetencyProgramsComponent }
];

@NgModule({
  declarations: [TradeCompetencyProgramsComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes)
  ]
})
export class TradeCompetencyProgramsModule { }
