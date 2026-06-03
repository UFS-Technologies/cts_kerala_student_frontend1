import { NgModule } from '@angular/core';
import { AgenthomeComponent } from './Agenthome.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: AgenthomeComponent
}];

@NgModule({
  declarations: [AgenthomeComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class AgenthomeModule { }
