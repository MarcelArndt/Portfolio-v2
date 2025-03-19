import { Component, AfterViewInit } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { TextService } from '../../text.service';
import { CommonModule } from '@angular/common';
import { aboutMeSectionAnimation } from './gsap-about-me-section';
import { SpotlightsComponent } from '../../share/spotlights/spotlights.component';
import { ProfilpictureComponent } from '../../share/profilpicture/profilpicture.component';

@Component({
  selector: 'about-me-section',
  imports: [IconComponent, CommonModule, SpotlightsComponent, ProfilpictureComponent  ],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

  currentNaviValue:number = 0
  constructor(public textSertvice: TextService){}

  ngAfterViewInit(){
    aboutMeSectionAnimation();
  }

  




}
