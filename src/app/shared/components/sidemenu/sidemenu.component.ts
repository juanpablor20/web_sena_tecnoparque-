import { Component, signal } from '@angular/core';
import { routes } from '../../../app.routes';
import { DASHBOARD_ROUTES } from '../../../dashboard/dashboard.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public showContent = signal(false);
  public toggleContent() {
    this.showContent.update( value => !value );

  }
  public menuItems = DASHBOARD_ROUTES
 
    .map( route => route.children ?? [])
    .flat()
    .filter( route => route && route.path)
   .filter( route => !route.path?.includes(':'))
   

  constructor() {


  
  }


}
