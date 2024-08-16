import { Component } from '@angular/core';
import { HeroSectionComponent } from '../shared/hero-section/hero-section.component';

import { CtaSectionsComponent } from '../shared/cta-sections/cta-sections.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { IntroBannerComponent } from '../shared/intro-banner/intro-banner.component';
import { FarmsService } from '../core/services/farms.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeroSectionComponent,
    NavbarComponent,
    FooterComponent,
    CtaSectionsComponent,
    IntroBannerComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  public items: any[] = [];

  constructor(private estateService: FarmsService) {}

  ngOnInit(): void {
    this.estateService.getEstates().subscribe((data) => {
      this.items = data;
    });
  }
}
