import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BasePageService } from '../../../services/base-page.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent extends BasePageService implements OnInit{

  public createCarForm: FormGroup;
  constructor(
    private readonly injector: Injector,
    private readonly fb: FormBuilder,
    protected readonly dialogRef: NbDialogRef<any>,
  ) {
    super(injector);

    this.createCarForm = this.fb.group({
      brand: [''],
      nome_modelo: [''],
      ano: [''],
      cor: [''],
      num_portas: [''],
      combustivel: [''],
      km: [''],
      valor: [''],
      image: [''],
    });
    }

    public ngOnInit(): void {

    }

    public close(): void {
      this.dialogRef.close();
    }

    public createCar(): void {
      const carData = this.createCarForm.value;

      // Aqui seria um requisição para a API, porém como não temos uma API, vamos apenas enviar os dados para a lista da tela inicial.
      this.dialogRef.close(carData);
    }
}
