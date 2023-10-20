import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      brand: ['', Validators.required],
      nome_modelo: ['', Validators.required],
      ano: ['', Validators.required],
      cor: ['', Validators.required],
      num_portas: ['', Validators.required],
      combustivel: ['', Validators.required],
      km: ['', Validators.required],
      valor: ['', Validators.required],
      image: ['', Validators.required],
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
