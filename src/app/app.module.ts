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
import { ImgwrapComponent } from './imgwrap/imgwrap.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PcsofttaskComponent } from './pcsofttask/pcsofttask.component';

@NgModule({
  declarations: [
    AppComponent,
    CardLayoutComponent,
    CreateEmpComponent,
    ShowEmpComponent,
    ImgwrapComponent,
    PcsofttaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeModule,
    FormsModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
