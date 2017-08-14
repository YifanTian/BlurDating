import { Routes, RouterModule } from '@angular/router';
import { ProblemsComponent } from './components/problems/problems.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ProblemsComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const routing = RouterModule.forRoot(routes);