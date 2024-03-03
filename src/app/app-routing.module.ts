import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateMonthComponent } from './create-month/create-month.component';
import { CreateYearComponent } from './create-year/create-year.component';

const routes: Routes = [
  { path: 'month', component: CreateMonthComponent },
  { path: 'year', component: CreateYearComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
