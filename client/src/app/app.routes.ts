import { Routes, RouterModule } from '@angular/router';
import { ProblemsComponent } from './components/problems/problems.component';
import { LandingComponent } from './components/landing/landing.component';

import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: LandingComponent
    },
    {
        path: 'problems',
        component: ProblemsComponent
    },
    {
        path: 'peoples/:id',
        component: PeopleDetailComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const routing = RouterModule.forRoot(routes);