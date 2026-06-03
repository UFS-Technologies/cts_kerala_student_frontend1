import { NgModule } from '@angular/core';
import { AgentComponent } from './Agent.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: AgentComponent
}];

@NgModule({
  declarations: [AgentComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class AgentModule { }
