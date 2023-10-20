import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BasePageService } from '../../../services/base-page.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent extends BasePageService{

  items: NbMenuItem[] = [
    {
      title: 'Marca',
      children: [
        {
          title: 'Todas',
          link: 'home',
        },
        {
          title: 'Fiat',
          link: 'home',
          queryParams: { brand: 'fiat' },
        },
        {
          title: 'Toyota',
          link: 'home',
          queryParams: { brand: 'toyota' },
        },
        {
          title: 'Chevrolet',
          link: 'home',
          queryParams: { brand: 'chevrolet' },
        },
      ],
    },
    {
      title: 'Ano / Modelo',
      link: 'on-dev',
    },
    {
      title: 'Novos',
      link: 'on-dev',
    },
    {
      title: 'Usados',
      link: 'on-dev',
    },
  ];
}
