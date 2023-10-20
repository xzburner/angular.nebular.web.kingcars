import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cars } from '../fake-data/cars.data';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  httpOptions: any = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };

  public get(url: string, params = {}, headers = {}) {
    //Aqui seria uma requisicao GET para a API, porém a mesma apresentou problemas de CORS, então não foi possível realizar a requisição.
    //return this.httpClient.get(url, this.httpOptions).toPromise();

    //Aqui é um mock de uma requisição GET para a API.
    return cars;
  }
}
