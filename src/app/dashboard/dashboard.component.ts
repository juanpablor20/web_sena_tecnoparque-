import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../shared/components/sidemenu/sidemenu.component';
import { NavComponent } from '../shared/components/nav/nav.component';
import { ToastComponent } from '../shared/components/toast/toast.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidemenuComponent,
    RouterModule,
    ToastComponent,
    NavComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export  default class DashboardComponent {
 
}
