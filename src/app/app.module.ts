import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { CreateEmpComponent } from './CRUD/create-emp/create-emp.component';
import { EmployeeModule } from './CRUD/employee/employee.module';
import { ShowEmpComponent } from './CRUD/show-emp/show-emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CardLayoutComponent,
    CreateEmpComponent,
    ShowEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
