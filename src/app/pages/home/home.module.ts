import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class HomeModule { }
