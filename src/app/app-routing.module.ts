import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { SolicitudSupAdminComponent } from './components/solicitud-sup-admin/solicitud-sup-admin.component';
import { Turno } from './models/turno';
import { TurnoComponent } from './components/turno/turno.component';


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

];

export class AppRoutingModule { }

