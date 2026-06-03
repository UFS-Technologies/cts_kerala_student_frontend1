import { NgModule } from '@angular/core';
import { AssociationComponent } from './Association.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: AssociationComponent
}];

@NgModule({
  declarations: [AssociationComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class AssociationModule { }
