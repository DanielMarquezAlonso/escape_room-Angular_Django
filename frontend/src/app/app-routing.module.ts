import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RankingComponent } from './ranking/ranking.component';
import { Nivel1Component } from './nivel1/nivel1.component';
import { FinComponent } from './fin/fin.component';

const routes: Routes = [
  {path: 'nivel1', component:Nivel1Component},
  {path: 'ranking', component:RankingComponent},
  {path: 'fin', component:FinComponent},
  {path: 'menu', component:MenuComponent},
  {path: '', component:MenuComponent},
  {path: '**', component:MenuComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
