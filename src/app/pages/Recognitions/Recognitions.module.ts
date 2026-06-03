import { NgModule } from '@angular/core';
import { RecognitionsComponent } from './Recognitions.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
const routes: Routes = [{
  path: '',
  component: RecognitionsComponent
}];

@NgModule({
  declarations: [RecognitionsComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class RecognitionsModule { }
