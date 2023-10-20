import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbInputModule } from '@nebular/theme';

import { CreateCarRoutingModule } from './create-car-routing.module';
import { CreateCarComponent } from './create-car.component';


@NgModule({
  declarations: [
    CreateCarComponent
  ],
  imports: [
    CommonModule,
    CreateCarRoutingModule,
    NbCardModule,
    NbFormFieldModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
  ],
})
export class CreateCarModule { }
