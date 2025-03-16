import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { ConfigService } from '../../config.service';
import { TextService } from '../../text.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hero-section',
  imports: [IconComponent, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  constructor (public config:ConfigService, public textService: TextService ){}

  async ngOnInit(){
    await this.loadText()
  }

  async loadText(){

  }

}
