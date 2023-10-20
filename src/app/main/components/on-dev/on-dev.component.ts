import { Component } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-on-dev',
  templateUrl: './on-dev.component.html',
  styleUrls: ['./on-dev.component.scss']
})
export class OnDevComponent {

    constructor(
      protected dialogRef: NbDialogRef<OnDevComponent>,
    ) { }

  public close(): void {
    this.dialogRef.close();
  }
}
