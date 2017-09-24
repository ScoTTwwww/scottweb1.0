import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
 import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './home/container/container.component';
import { AuthService } from '../auth/shared/auth.service';
 

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
 
  ],
  declarations: [DashboardComponent, HomeComponent, ContainerComponent ]
  

})
export class DashboardModule { }
