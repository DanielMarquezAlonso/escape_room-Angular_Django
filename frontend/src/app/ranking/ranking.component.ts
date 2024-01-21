import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styles: ['#fondo_menu {background-image: url(../../Imagenes/Fondos/fondo1.png);height: 100vh; text-align: center;}',
    '#fondo_menu {background-repeat: no-repeat;}',
    'h1 {padding-top: 3vh; padding-bottom: 4vh; font-size: 70px;}',
    '.container {margin-bottom: 3vh;}'
  ]
})
export class RankingComponent {

  datos: any;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDatos().subscribe(data => {
      this.datos = data;
      console.log(this.datos);
    });
  }

}
