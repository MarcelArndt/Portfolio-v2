import { Component, AfterViewInit, HostListener, ViewChildren, ElementRef, ChangeDetectorRef, QueryList } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';
import { TextService } from '../../text.service';
import { CommonModule } from '@angular/common';
import { aboutMeSectionAnimation } from './gsap-about-me-section';
import { SpotlightsComponent } from '../../share/spotlights/spotlights.component';
import { ProfilpictureComponent } from '../../share/profilpicture/profilpicture.component';
import { GlowingBoxComponent } from '../../share/glowing-box/glowing-box.component';

@Component({
  selector: 'about-me-section',
  imports: [IconComponent, CommonModule, SpotlightsComponent, ProfilpictureComponent, GlowingBoxComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  constructor(public textSertvice: TextService, private cdr: ChangeDetectorRef){}

  @ViewChildren("box") aboutMeTextBoxArray!: QueryList<ElementRef>;

  mouseX:number = 0
  mouseY:number = 0
  currentNaviValue:number = 0

  

  ngAfterViewInit(){
    aboutMeSectionAnimation();
    this.cdr.detectChanges();

  }
  
  ngOnInit(){
    
  }
  




}
