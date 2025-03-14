import { Component } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'hero-section',
  imports: [IconComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  constructor (public config:ConfigService ){}
}
