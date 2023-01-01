import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { CreateEmpComponent } from './CRUD/create-emp/create-emp.component';
import { ShowEmpComponent } from './CRUD/show-emp/show-emp.component';

const routes: Routes = [
  {path: '', component:ShowEmpComponent},
  {path: 'showemp', component:ShowEmpComponent},
  {path:'create',component:CreateEmpComponent},
  {path:'update/:id', component:CreateEmpComponent},
  {path:'cardLayout', component:CardLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
