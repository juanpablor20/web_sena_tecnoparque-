import { Component } from '@angular/core';
import { HeroSectionComponent } from '../shared/hero-section/hero-section.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CtaSectionsComponent } from '../shared/cta-sections/cta-sections.component';
import { IntroBannerComponent } from '../shared/intro-banner/intro-banner.component';

import { FarmsService } from '../core/services/farms.service';
import { DescriptionProyectComponent } from '../shared/description-proyect/description-proyect.component';
import { MicroorganismosComponent } from '../shared/microorganismos/microorganismos.component';
import { TeamComponent } from '../shared/team/team.component';
import { WasappButtonComponent } from '../shared/components/wasapp-button/wasapp-button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [  HeroSectionComponent,
    NavbarComponent,
    FooterComponent,
    CtaSectionsComponent,
    IntroBannerComponent,
    DescriptionProyectComponent,
    MicroorganismosComponent,
    
    TeamComponent,
    WasappButtonComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  public items: any[] = [];

  constructor(private estateService: FarmsService) {}

  ngOnInit(): void {
    this.estateService.getEstates().subscribe((data) => {
      this.items = data;
    });
  }

}
