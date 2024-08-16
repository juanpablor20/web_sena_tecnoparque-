import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
}
