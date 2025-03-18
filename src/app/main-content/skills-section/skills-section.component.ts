import { Component, AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef, HostListener} from '@angular/core';
import { TextService } from '../../text.service';
import { CommonModule } from '@angular/common';
import { skillsSectionAnimation } from './gsap-skills-section';
import { ConfigService } from '../../config.service';



@Component({
  selector: 'app-skills-section',
  imports: [CommonModule,],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss', './pacman.scss']
})
export class SkillsSectionComponent {
  constructor(public textService: TextService, public config: ConfigService, private cdr: ChangeDetectorRef){}

  @ViewChild("spaceForPoints") elementForSpace!:ElementRef | undefined;

  windowsSize:number = 0

  @HostListener('window:resize', ['$event'])
    calculateWindowSize(){
      const element = this.elementForSpace?.nativeElement || null
      this.windowsSize = element?.offsetWidth|| 0;
      this.amountOfPointsInSpace = Math.floor((this.windowsSize) / (this.sizeOfPoints + this.spaceBetweenPoints)) || 0;
      this.pointsArray = new Array(this.amountOfPointsInSpace);
  }

  pointsArray:string[]= []
  amountOfPointsInSpace:number = 0;
  spaceBetweenPoints:number = 96;
  sizeOfPoints:number = 36;
  ratioForUseSpace:number = 0.75;
  pacmanSize = 100;
  pathForBackground:string = "";
  
  ngAfterViewInit(){
    skillsSectionAnimation();
    this.calculateWindowSize();
    this.pathForBackground = this.config.backgroundForPacman;
    this.cdr.detectChanges();
  }

  ngOninit(){
  }

  get urlBackgroundSkills():string{
    return `url(${this.pathForBackground})`
  }

  get marginInPx():string{
    const number = this.spaceBetweenPoints / 2
    return `${number}px`
  }

  get urlBackground():string{
    return `url(${this.pathForBackground})`
  }

}
