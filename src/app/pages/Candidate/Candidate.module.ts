import { NgModule } from '@angular/core';
import { candidateComponent } from './Candidate.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: candidateComponent
}];

@NgModule({
  declarations: [candidateComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class candidateModule { }
