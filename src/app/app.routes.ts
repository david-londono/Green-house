import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'search',
        loadComponent: () => import('./pages/search-plant/search-plant.component').then(m => m.SearchPlantComponent),
    },
    { path: '**', redirectTo: 'home' },
];
