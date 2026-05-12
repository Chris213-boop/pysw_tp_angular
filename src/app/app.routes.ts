import { Routes } from '@angular/router';
import { Punto3Component } from './components/punto3/punto3';
import { Punto1 } from './components/punto1/punto1';
import { Punto2Component } from './components/punto2/punto2';
import { InscripcionFormComponent } from './components/inscripcion-form/inscripcion-form';
import {TablaComponent } from './components/tabla/tabla';

export const routes: Routes = [
    {path: 'punto1', component: Punto1},
    { path: 'punto2', component: Punto2Component },
    {path: 'punto3', component: Punto3Component},
    {path: 'tabla', component: TablaComponent},
    {path: 'inscripcionForm', component: InscripcionFormComponent},
    { path: '', redirectTo: '/punto1', pathMatch: 'full' }
];
