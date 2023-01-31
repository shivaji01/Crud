import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { CreateEmpComponent } from './CRUD/create-emp/create-emp.component';
import { ShowEmpComponent } from './CRUD/show-emp/show-emp.component';
import { ImgwrapComponent } from './imgwrap/imgwrap.component';
import { PcsofttaskComponent } from './pcsofttask/pcsofttask.component';

const routes: Routes = [
  {path: '', component:PcsofttaskComponent},
  {path: 'pcsoft', component:PcsofttaskComponent},
  {path: 'showemp', component:ShowEmpComponent},
  {path:'create',component:CreateEmpComponent},
  {path:'update/:id', component:CreateEmpComponent},
  {path:'cardLayout', component:CardLayoutComponent},
  {path:'crud',component:ShowEmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
