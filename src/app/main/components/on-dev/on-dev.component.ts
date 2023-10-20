import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BasePageService } from '../../../services/base-page.service';

@Component({
  selector: 'app-on-dev',
  templateUrl: './on-dev.component.html',
  styleUrls: ['./on-dev.component.scss'],
})
export class OnDevComponent extends BasePageService {

  constructor(
    private readonly injector: Injector,
  ) {
    super(injector);
  }
}
