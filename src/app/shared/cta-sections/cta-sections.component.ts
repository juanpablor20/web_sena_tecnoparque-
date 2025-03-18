import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-cta-sections',
  standalone: true,
  imports: [RouterLink, CommonModule, ItemCardComponent],
  templateUrl: './cta-sections.component.html',
  styleUrls: ['./cta-sections.component.css'],
})
export class CtaSectionsComponent {
  @Input() items: any[] = [];

  
}
