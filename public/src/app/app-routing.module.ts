import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { NewAddComponent } from './new-add/new-add.component';
import { AddsComponent } from './adds/adds.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'success', component: SuccessComponent},
  {path:'newAdd', component: NewAddComponent},
  {path:'adds/:name',component: AddsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
