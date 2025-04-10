import { Component } from '@angular/core';
import { HeroSectionComponent } from '../shared/hero-section/hero-section.component';
import { CtaSectionsComponent } from '../shared/cta-sections/cta-sections.component';
import { IntroBannerComponent } from '../shared/intro-banner/intro-banner.component';
import { FarmsService } from '../core/services/farms.service';
import { DescriptionProyectComponent } from '../shared/description-proyect/description-proyect.component';
import { MicroorganismosComponent } from '../shared/microorganismos/microorganismos.component';
import { TeamComponent } from '../shared/team/team.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    CtaSectionsComponent,
    IntroBannerComponent,
    DescriptionProyectComponent,
    MicroorganismosComponent,
    TeamComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
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
