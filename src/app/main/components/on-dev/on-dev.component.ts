import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-dev',
  templateUrl: './on-dev.component.html',
  styleUrls: ['./on-dev.component.scss']
})
export class OnDevComponent {

  constructor(
    private router: Router,
  ) { }

  public goToHome(): void {
    this.router.navigateByUrl('main/home');
  }
}
