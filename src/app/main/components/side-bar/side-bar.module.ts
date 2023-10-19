import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbMenuModule } from '@nebular/theme';

import { SideBarRoutingModule } from './side-bar-routing.module';
import { SideBarComponent } from './side-bar.component';


@NgModule({
  declarations: [
    SideBarComponent,
  ],
  exports: [
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    SideBarRoutingModule,
    NbMenuModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
  ],
})
export class SideBarModule { }
