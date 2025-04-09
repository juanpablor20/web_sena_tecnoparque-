import { Routes } from '@angular/router';

import { LandingPageComponent } from './landing/landing-page.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutLandingComponent } from './shared/layout-landing/layout-landing.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  {
    path: 'home',
    component: LayoutLandingComponent,

    children: [
      { path: '', component: LandingPageComponent },
      {
        path: 'cacaoCartilla',
        loadComponent: () =>
          import(
            './landing/pages/cacao-cartilla/cacao-cartilla.component'
          ).then((c) => c.CacaoCartillaComponent),
      },
      {
        path: 'cofeCartilla',
        loadComponent: () =>
          import(
            './landing/pages/cofe-conponent/cofe-conponent.component'
          ).then((c) => c.CofeConponentComponent),
      },
      {
        path: 'state/:id',
        loadComponent: () =>
          import('./landing/pages/views-estate/views-estate.component').then(
            (c) => c.ViewsEstateComponent
          ),
      },
     
      {
        path: 'MetodologiaCacao',
        loadComponent: () =>
          import(
            './landing/pages/cacao-metodology/cacao-metodology.component'
          ).then((c) => c.CacaoMetodologyComponent),
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./landing/pages/contacts/contacts.component').then(
            (c) => c.ContactsComponent
          ),
      },
      {
        path: 'MetodologiaCafe',
        loadComponent: () =>
          import(
            './landing/pages/coffe-metodology/coffe-metodology.component'
          ).then((c) => c.CoffeMetodologyComponent),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
  },
  { path: '**', component: PageNotFoundComponent },
  
];
