import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spotlights',
  imports: [CommonModule],
  templateUrl: './spotlights.component.html',
  styleUrl: './spotlights.component.scss'
})
export class SpotlightsComponent {
@Input() leftLight = "center"
}
