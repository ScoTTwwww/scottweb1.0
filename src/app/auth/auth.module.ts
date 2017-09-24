import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/auth.service';
import { LoginFormComponent } from './login/login-form/login-form.component';

@NgModule({
  imports: [
     CommonModule,
    AuthRoutingModule,
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [LoginComponent, LogoutComponent, LoginFormComponent],
  providers: [AuthService]
})
export class AuthModule { }
