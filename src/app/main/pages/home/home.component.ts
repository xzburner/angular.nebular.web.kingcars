import { Component, Injector } from '@angular/core';
import { CarModel } from '../../../models/car.model';
import { ApiServiceService } from '../../../services/api-service.service';
import { BasePageService } from '../../../services/base-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePageService {

  public cars: CarModel[] = [];

  constructor(
    private readonly injector: Injector,
    private readonly apiService: ApiServiceService,
  ) {
    super(injector);
  }

  public async getCarsData(): Promise<void> {
    try {
      this.cars = await this.apiService.get('esta-seria-a-url-da-api');
    }
    catch (e) {
      await this.toastrService.danger('Não foi possível carregar os dados dos carros.');
    }
  }

}
