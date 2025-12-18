import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component/dashboard.component';
import { AnexarNfeComponent } from './components/notaFiscal/anexar/anexar-nfe.component/anexar-nfe.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'AnexarNFE', component: AnexarNfeComponent},
];
