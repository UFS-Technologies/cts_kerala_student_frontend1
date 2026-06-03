import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PagesModule } from './pages/pages.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/http.interceptor';
import { CandidateService } from './services/candidate';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    SlickCarouselModule,
    PagesModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    ComponentsModule,
    HttpClientModule,
    MatIconModule
   
    
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
