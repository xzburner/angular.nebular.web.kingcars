import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { OnDevComponent } from '../main/components/on-dev/on-dev.component';

@Injectable({
  providedIn: 'root',
})
export class BasePageService {

  protected readonly router: Router;
  protected readonly toastrService: NbToastrService;
  protected readonly dialogService: NbDialogService;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.toastrService = injector.get(NbToastrService);
    this.dialogService = injector.get(NbDialogService);
  }

  public openPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
