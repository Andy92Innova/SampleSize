import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SampleSizeServiceService } from './service/sample-size-service.service';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BreadcumbComponent } from './components/shared/breadcumb/breadcumb.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    PaginationComponent,
    HeaderComponent,
    BreadcumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    SampleSizeServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
