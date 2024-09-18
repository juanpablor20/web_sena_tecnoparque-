

import {Routes} from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [

{
  
        
            path: '',
            loadComponent: () => import('./dashboard.component'),
        
    children: [
          {
            path: 'usuarios',
            title: 'usuarios',
            loadComponent: () => import('./pages/usuarios/usuarios.component'),
          } ,
          {
            path: 'block',
            title: 'block',
            loadComponent: () => import('./pages/block/block.component'),
          } ,
          {
            path: 'detalles-software',
            title: 'detalles software',
            loadComponent: () => import('./pages/detalles-software/detalles-software.component'),
          },
          {
            path: 'fincas',
            title: 'fincas',
            loadComponent: () => import('./pages/fincas/fincas.component'),
          },
           {
            path: 'resultados',
            title: 'resultados',
            loadComponent: () => import('./pages/resultados-investigacion/resultados-investigacion.component'),
           },
         
     
          

    ]

   

},
    // {path: '', component:  DashboardComponent },
    // {path:'user', component: UserComponent }



    
         
         
         
]




