import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from 'src/admin-login/admin-login.component';
import { AdminComponent } from 'src/admin/admin.component';
import { ChangepassComponent } from 'src/changepass/changepass.component';
import { DetailsComponent } from 'src/details/details.component';
import { EditComponent } from 'src/edit/edit.component';
import { FrontComponent } from 'src/front/front.component';
import { HomeContentComponent } from 'src/home-content/home-content.component';
import { HomeComponent } from 'src/home/home.component';
import { LoginComponent } from 'src/login/login.component';
import { RegisterComponent } from 'src/register/register.component';
import { SignupComponent } from 'src/signup/signup.component';
import { UserDetailsComponent } from 'src/user-details/user-details.component';

const routes: Routes = [
  {path:'frontpage',component:FrontComponent},
  {path:'',redirectTo:'frontpage',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin',component:AdminComponent,children:[
    {path:'userDetails',component:UserDetailsComponent},
    {path:'admin-pass',component:ChangepassComponent}
  ]},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent,children:[{
    path:'register',component:RegisterComponent},
    {path:'details',component:DetailsComponent},
    {path:'invitation',component:HomeContentComponent},
    {path:'edit',component:EditComponent}

  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
