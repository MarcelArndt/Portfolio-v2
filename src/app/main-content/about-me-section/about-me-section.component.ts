import { Component, ElementRef, ChangeDetectorRef, viewChild, ViewChild} from '@angular/core';
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
  @ViewChild("fullInfoBox") infoBox!:ElementRef;
  mouseX:number = 0;
  mouseY:number = 0;
  currentNaviValue:number = 0;
  currentTextIndex:number = 0;
  isinfoBoxOpen:boolean = false;

  iconArray:string[]= ['info_i', 'lightbulb_2', 'check', 'flag']


  ngAfterViewInit(){
    aboutMeSectionAnimation();
    this.cdr.detectChanges();
    console.log(this.infoBox)
  }

  clickOnBox(index:number=0){
    this.currentTextIndex = index;
    this.isinfoBoxOpen = true;
    this.infoBox.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  clickToCloseBox(){
    this.isinfoBoxOpen = false;
  }

  stopPropagation(event:Event){
    event.stopPropagation();
  }

}
