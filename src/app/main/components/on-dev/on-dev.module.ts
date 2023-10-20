import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { CardCarComponent } from '../card-car/card-car.component';

import { OnDevRoutingModule } from './on-dev-routing.module';
import { OnDevComponent } from './on-dev.component';


@NgModule({
  declarations: [
    OnDevComponent
  ],
  imports: [
    CommonModule,
    OnDevRoutingModule,
    NbCardModule,
    NbButtonModule,
  ],
})
export class OnDevModule { }
