import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule } from '@nebular/theme';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    NbLayoutModule,
  ],
})
export class HeaderModule { }
