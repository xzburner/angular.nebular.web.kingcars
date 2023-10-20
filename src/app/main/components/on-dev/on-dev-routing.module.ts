import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnDevComponent } from './on-dev.component';

const routes: Routes = [
  {
    path: '',
    component: OnDevComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnDevRoutingModule { }
