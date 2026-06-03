/**
 * A shared module which is used in every page modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CookieService } from 'ngx-cookie-service';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    SlickCarouselModule,
    NgbModule,
    ComponentsModule,FormsModule,MatAutocompleteModule,MatDialogModule,MatExpansionModule
    ,MatProgressSpinnerModule,MatDatepickerModule
    ,MatInputModule,MatIconModule,
    MatNativeDateModule
  ],
  providers:[
    CookieService
  ],

})
export class SharedModuleModule { }
