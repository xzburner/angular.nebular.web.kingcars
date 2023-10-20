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
      icon: 'person-outline',
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Ano / Modelo',
      icon: 'lock-outline',
      link: 'on-dev',
    },
    {
      title: 'Novos',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Usados',
      icon: 'unlock-outline',
    },
  ];
}
