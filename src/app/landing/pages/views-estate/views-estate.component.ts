import { FarmsService } from '../../../core/services/farms.service';
import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-views-estate',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './views-estate.component.html',
  styleUrl: './views-estate.component.css',
})
export class ViewsEstateComponent {
  finca: any;

  constructor(
    private route: ActivatedRoute,
    private estateService: FarmsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      
      const id = Number(params.get('id'));

      if (id !== null) {
        this.estateService.getEstateById(id).subscribe((data) => {
          this.finca = data;
        });
      }
    });
  }
}
