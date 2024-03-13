import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';


export const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'inicio',
    component:InicioComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


export class AppRoutingModule { }

