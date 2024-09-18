import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
