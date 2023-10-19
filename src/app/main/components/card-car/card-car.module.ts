import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbFormFieldModule, NbIconModule } from '@nebular/theme';

import { CardCarRoutingModule } from './card-car-routing.module';
import { CardCarComponent } from './card-car.component';


@NgModule({
  declarations: [
    CardCarComponent,
  ],
  exports: [
    CardCarComponent,
  ],
  imports: [
    CommonModule,
    CardCarRoutingModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
  ],
})
export class CardCarModule { }
