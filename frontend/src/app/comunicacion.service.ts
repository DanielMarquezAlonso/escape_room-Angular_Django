import { Injectable } from '@angular/core';
import { buffer, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  public mensajero = ''

  constructor() { }

  public get recibir() {
    return this.mensajero;
  }

  public enviar(timeFin: string): void{
    this.mensajero = timeFin;
  }

}
