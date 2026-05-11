import { Routes } from '@angular/router';
import { Punto3Component } from './components/punto3/punto3';
import { Punto1 } from './components/punto1/punto1';

export const routes: Routes = [
    {path: 'punto3', component: Punto3Component},
    {path: 'punto1', component: Punto1}
];
