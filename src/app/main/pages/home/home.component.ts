import { Component, Injector, OnInit } from '@angular/core';
import { CarModel } from '../../../models/car.model';
import { ApiServiceService } from '../../../services/api-service.service';
import { BasePageService } from '../../../services/base-page.service';
import { CreateCarComponent } from '../create-car/create-car.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BasePageService implements OnInit {

  public cars: CarModel[] = [];
  public filteredCars: CarModel[] = [];
  public search: string = '';
  public brand: string = '';

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
      this.route.queryParams.subscribe(params => {
        this.brand = params['brand'];
        //Aqui poderia ter usado um observable, mas como não temos uma API, vamos usar um array de dados fake.
        this.cars = this.apiService.get('esta-seria-a-url-da-api');

        if (this.brand) {
          this.cars = this.cars.filter(car => car.brand.toUpperCase().includes(this.brand.toUpperCase()));
        }

        this.filteredCars = this.cars;
      });


    } catch (e) {
      await this.toastrService.danger('Não foi possível carregar os dados dos carros.');
    }
  }

  public async searchCar(search: any): Promise<void> {
    if (search !== '') {
      this.filteredCars = this.cars.filter(car => car.nome_modelo.toLowerCase().includes(search.toLowerCase()) || car.brand.toLowerCase().includes(search.toLowerCase()) || car.ano.toString().toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredCars = this.cars;
    }
  }

  public async createCar(): Promise<void> {
    const modalRef = await this.dialogService.open(CreateCarComponent);
    modalRef.onClose.subscribe(async (carData: CarModel) => {
      if (carData) {
        this.cars.push(carData);
        this.filteredCars = this.cars;
        await this.toastrService.success('Carro cadastrado com sucesso!');
      }
    });
  }
}
