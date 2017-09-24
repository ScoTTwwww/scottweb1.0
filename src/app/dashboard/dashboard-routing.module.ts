import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from '../product/product.component';
import {   EnactmentComponent } from '../enactment/enactment.component';
import { AuthguardGuard } from '../shared/guard/authguard.guard';
const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthguardGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent

            },
            {
                path: 'product',
                component: ProductComponent

            },
            {
                path: 'enactment',
                component: EnactmentComponent 

            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
