import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component/dashboard.component';
import { AttachNfeComponent } from './components/notaFiscal/attachs/attach-nfe.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'AnexarNFE', component: AttachNfeComponent},
];
