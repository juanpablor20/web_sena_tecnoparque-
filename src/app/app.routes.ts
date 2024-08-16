import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimerafincaComponent } from './dashboard/pages/primerafinca/primerafinca.component';
import { SegundafincaComponent } from './dashboard/pages/segundafinca/segundafinca.component';
import { ViewsEstateComponent } from './dashboard/pages/views-estate/views-estate.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'primerafinca', component: PrimerafincaComponent },
  { path: 'segundafinca', component: SegundafincaComponent },
  { path: 'hola', component: ViewsEstateComponent },
  { path: 'finca/:id', component: ViewsEstateComponent },
  // {
  //     path: 'first-component',
  //     component: FirstComponent, // this is the component with the <router-outlet> in the template
  //     children: [
  //       {
  //         path: 'child-a', // child route path
  //         component: ChildAComponent, // child route component that the router renders
  //       },
  //       {
  //         path: 'child-b',
  //         component: ChildBComponent, // another child route component that the router renders
  //       },
  //     ],
  //   },
];
