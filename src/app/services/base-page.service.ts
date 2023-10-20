import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { OnDevComponent } from '../main/components/on-dev/on-dev.component';

@Injectable({
  providedIn: 'root',
})
export class BasePageService {

  private readonly router: Router;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
  }

  public openPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
