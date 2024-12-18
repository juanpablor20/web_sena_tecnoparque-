import { Routes } from '@angular/router';

import { ViewsEstateComponent } from './landing/pages/views-estate/views-estate.component';
import { LoginComponent } from './auth/login/login.component';
import { LandingPageComponent } from './landing/landing-page.component';
import { CacaoMetodologyComponent } from './landing/pages/cacao-metodology/cacao-metodology.component';
import { CoffeMetodologyComponent } from './landing/pages/coffe-metodology/coffe-metodology.component';
import { ContactsComponent } from './landing/pages/contacts/contacts.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CacaoCartillaComponent } from './landing/pages/cacao-cartilla/cacao-cartilla.component';
import { CofeConponentComponent } from './landing/pages/cofe-conponent/cofe-conponent.component';


export const routes: Routes = [


  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: LandingPageComponent},
  { path: 'hola', component: ViewsEstateComponent },
  { path: 'estate/:id', component: ViewsEstateComponent },
  {path: 'login', component: LoginComponent },
  {path: 'MetodologiaCacao', component: CacaoMetodologyComponent},
 {path: 'contacts', component: ContactsComponent},
  {path: 'MetodologiaCafe', component: CoffeMetodologyComponent},
  {path: 'cacaoCartilla', component: CacaoCartillaComponent},
  {path: 'cofeCartilla', component: CofeConponentComponent},

  {
    path:'dashboard', canActivate: [AuthGuard],
    loadChildren:() => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
},
  {path: '**', component: PageNotFoundComponent}
];
