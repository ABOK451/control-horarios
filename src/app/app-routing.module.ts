import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { SolicitudSupAdminComponent } from './components/solicitud-sup-admin/solicitud-sup-admin.component';
import { TurnoComponent } from './components/turno/turno.component';
import { AreaComponent } from './components/area/area.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'solicitudsupad',
    component:SolicitudSupAdminComponent
  },
  {
    path: 'turno',
    component:TurnoComponent
  },
  {
    path: 'area',
    component:AreaComponent
  },

];

export class AppRoutingModule { }

