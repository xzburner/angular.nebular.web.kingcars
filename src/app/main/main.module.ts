import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbContextMenuModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { HeaderModule } from './components/header/header.module';
import { SideBarModule } from './components/side-bar/side-bar.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    SideBarModule,
    NbMenuModule,
    NbContextMenuModule,
  ],
})
export class MainModule { }
