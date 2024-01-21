import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Nivel1Component } from '../nivel1/nivel1.component';
import { Nivel1 } from '../nivel1/nivel1';
import { ComunicacionService } from '../comunicacion.service';
import { buffer } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.component.html',
  styles:  [
    '#btn{float: center;}',
    '#btn{margin: 5px;}',
    '#fondo_menu {background-image: url(../../Imagenes/Fondos/fondo4.png);}',
    '#fondo_menu {background-repeat: no-repeat;}',
    '#fondo_menu {height: 100vh;}',
    '#fondo_menu {text-align: center;}',
    '.container {width: 100%;}',
    '.container {height: 100vh;}',
    '#titulo {font-size: 9em;}',
    '#titulo, #descripcion, h3 {color: white};',
    'form {width: 9em;}',
  ]
})
export class FinComponent {
  ranking: any;
  public myForm!: FormGroup;
  public timeFin = this.comunicacion.recibir;

  constructor(public apiService: ApiService,
              public fb: FormBuilder,
              private router: Router,
              public comunicacion: ComunicacionService
              ) {}

  ngOnInit(){
    
    console.log(this.timeFin);
    this.myForm = this.fb.group({
      tiempo: new FormControl(this.timeFin),
      usuario: new FormControl('')

    });
  }
  //.value
  onSubmit(){
    this.apiService.createRanking(this.myForm.value).subscribe(data=>{});
    this.router.navigate(['ranking']);
  }
}
