import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   EnactmentComponent } from './enactment.component';
import { EnactmentRoutingModule } from './enactment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EnactmentRoutingModule
  ],
  declarations: [  EnactmentComponent]
})
export class EnactmentModule { }
