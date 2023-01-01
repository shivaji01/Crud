import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]

})
export class EmployeeModule { }
