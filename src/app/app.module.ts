import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import { RouterModule } from '@angular/router';
import { FrontComponent } from 'src/front/front.component';
import { LoginComponent } from 'src/login/login.component';
import {MatInputModule} from '@angular/material/input'
import { HomeComponent } from 'src/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/register/register.component';
import {MatSelectModule} from '@angular/material/select';
import { DetailsComponent } from 'src/details/details.component';
import { HomeContentComponent } from 'src/home-content/home-content.component';
import { TransferDataService } from 'src/services/transfer-data.service';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from 'src/edit/edit.component';
import { SignupComponent } from 'src/signup/signup.component';
import { AdminLoginComponent } from 'src/admin-login/admin-login.component';
import { AdminComponent } from 'src/admin/admin.component';
import { UserDetailsComponent } from 'src/user-details/user-details.component';
import { ChangepassComponent } from 'src/changepass/changepass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
   HomeComponent,
   RegisterComponent,
    FrontComponent,
    LoginComponent,
    DetailsComponent,
    EditComponent,
    SignupComponent,
    AdminLoginComponent,
   AdminComponent,
   UserDetailsComponent,
   ChangepassComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatIconModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [TransferDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
