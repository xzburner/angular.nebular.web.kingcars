import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { CardCarModule } from '../../components/card-car/card-car.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    CardCarModule,
  ],
})
export class HomeModule { }
