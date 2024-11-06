import { Routes } from '@angular/router';

import { ViewsEstateComponent } from './landing-page/pages/views-estate/views-estate.component';
import { LoginComponent } from './auth/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import DashboardComponent from './dashboard/dashboard.component';
import { CacaoMetodologyComponent } from './landing-page/pages/cacao-metodology/cacao-metodology.component';
import { CoffeMetodologyComponent } from './landing-page/pages/coffe-metodology/coffe-metodology.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {path: '', component: LandingPageComponent},
  {path: 'home', component: LandingPageComponent},
  { path: 'hola', component: ViewsEstateComponent },
  { path: 'finca/:id', component: ViewsEstateComponent },
  {path: 'login', component: LoginComponent },
  {path: 'MetodologiaCacao', component: CacaoMetodologyComponent},
  {path: 'MetodologiaCafe', component: CoffeMetodologyComponent},
  {
    path:'dashboard',
    loadChildren:() => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
},
  {path: '**', component: LandingPageComponent}
];
