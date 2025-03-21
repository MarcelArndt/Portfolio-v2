import { Component} from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ConfigService } from '../../config.service';
import { TextService } from '../../text.service';
import { CommonModule } from '@angular/common';
import { ProfilpictureComponent } from '../../share/profilpicture/profilpicture.component';
import { SpotlightsComponent } from '../../share/spotlights/spotlights.component';
import { heroSectionAnimation } from './gsap-hero-section';

@Component({
  selector: 'hero-section',
  imports: [IconComponent, CommonModule, ProfilpictureComponent, SpotlightsComponent ],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  constructor (public config:ConfigService, public textService: TextService ){}

  ngAfterViewInit(){
      heroSectionAnimation()
  }


}
