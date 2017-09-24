import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ModalModule as Angular2ModalModule } from 'angular2-modal';
import { BootstrapModalModule as Angular2BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ToastModule, ToastOptions } from 'ng2-toastr';
import { AccordionModule, BsDropdownModule, CarouselModule, DatepickerModule, ModalModule, TabsModule, TimepickerModule } from 'ngx-bootstrap';

import { ModalService, ToastService, Modal, CustomToastOptions } from './service';
import { ModalAlertComponent, ModalConfirmComponent, ModalDialogComponent } from './modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './pagination';
import { NgxPaginationModule } from 'ngx-pagination';

import { AuthService } from '../auth/shared/auth.service';
import { AuthguardGuard } from '../shared/guard/authguard.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,


    Angular2ModalModule.forRoot(),
    Angular2BootstrapModalModule,

    ToastModule.forRoot(),

    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,

  ],
  declarations: [

    ModalAlertComponent,
    ModalConfirmComponent,
    ModalDialogComponent,
    PaginationComponent,
  ],
  exports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,
    Angular2ModalModule,
    PaginationComponent,
    NgxPaginationModule,
    AccordionModule,
    BsDropdownModule,
    CarouselModule,
    DatepickerModule,
    ModalModule,
    TabsModule,
    TimepickerModule,


    ModalDialogComponent,

  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: ToastOptions, useClass: CustomToastOptions },
        ModalService,
        ToastService,
        Modal,
        ToastsManager,
        AuthService,
        AuthguardGuard
      ]
    };
  }
}
