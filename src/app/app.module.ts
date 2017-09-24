import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
 
import { AuthReducer } from './auth/shared/auth.reducer'
import { ProductModule } from './product/product.module';
import { ProductReducer } from './product//shared/product.reducer'
import { EnactmentModule } from './enactment/enactment.module';
import { AngularFireModule } from 'angularfire2';
 import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    HttpModule,
 
    ProductModule,
    EnactmentModule,
    SharedModule.forRoot(),
    StoreModule.provideStore({ auth: AuthReducer,
                               product: ProductReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension() 
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
