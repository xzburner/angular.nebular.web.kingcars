import { Component, Injector, OnInit } from '@angular/core';
import { cars } from '../../../fake-data/cars.data';
import { CarModel } from '../../../models/car.model';
import { ApiServiceService } from '../../../services/api-service.service';
import { BasePageService } from '../../../services/base-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BasePageService implements OnInit {

  public cars: CarModel[] = [];
  public filteredCars: CarModel[] = [];
  public search: string = '';

  constructor(
    private readonly injector: Injector,
    private readonly apiService: ApiServiceService,
  ) {
    super(injector);
  }

  public async ngOnInit(): Promise<void> {
    await this.getCarsData();
  }

  public async getCarsData(): Promise<void> {
    try {
      this.cars = this.apiService.get('esta-seria-a-url-da-api');
      this.filteredCars = this.cars;
    } catch (e) {
      await this.toastrService.danger('Não foi possível carregar os dados dos carros.');
    }
  }

  public async searchCar(search: any): Promise<void> {
    console.log(search);
    if (search !== '') {
      this.filteredCars = this.cars.filter(car => car.nome_modelo.toLowerCase().includes(search.toLowerCase()) || car.brand.toLowerCase().includes(search.toLowerCase()) || car.ano.toString().toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredCars = this.cars;
    }
  }

}
