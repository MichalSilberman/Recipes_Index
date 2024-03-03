import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMonthComponent } from './create-month/create-month.component';
import { MonthsSelectComponent } from './months-select/months-select.component';
import { CreateYearComponent } from './create-year/create-year.component';
import { YearSelectComponent } from './year-select/year-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMonthComponent,
    MonthsSelectComponent,
    CreateYearComponent,
    YearSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFor,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
