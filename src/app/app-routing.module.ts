import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomesComponent } from './practice/homes/homes.component';
import {AboutsComponent} from './practice/abouts/abouts.component';
import { LoginComponent } from './practice/login/login.component';
const routes: Routes = [
  {path:'homes',component:HomesComponent},
  {path:'abouts',component:AboutsComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
