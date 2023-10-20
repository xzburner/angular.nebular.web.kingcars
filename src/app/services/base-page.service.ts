import { Injectable, Injector } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { OnDevComponent } from '../main/components/on-dev/on-dev.component';

@Injectable({
  providedIn: 'root'
})
export class BasePageService {

  private readonly dialogService: NbDialogService;

  constructor(injector: Injector) {
    this.dialogService = injector.get(NbDialogService);
  }

  public openOnDev(): void {
    this.dialogService.open(OnDevComponent, {
    });
  }
}
