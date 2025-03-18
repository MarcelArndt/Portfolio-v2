import { Component, HostListener, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../config.service';
import { TextService } from '../../text.service';


@Component({
  selector: 'app-pacman-area',
  imports: [CommonModule],
  templateUrl: './pacman-area.component.html',
  styleUrls: ['./pacman-area.component.scss', 'pacman.scss']
})
export class PacmanAreaComponent {
  constructor(private cdr: ChangeDetectorRef, private config: ConfigService, public textService: TextService ){

  }

  @ViewChild("spaceForPoints") elementForSpace!:ElementRef | undefined;;

  pointsArray:string[]= []
  amountOfPointsInSpace:number = 0;
  spaceBetweenPoints:number = 96;
  sizeOfPoints:number = 36;
  ratioForUseSpace:number = 0.75;
  pacmanSize = 100;
  pathForBackground:string = "";
  

  @HostListener('window:resize', ['$event'])
    calculateWindowSize(){
      const element = this.elementForSpace?.nativeElement || null
      const currenWindowWidth = element?.offsetWidth || 0
      this.amountOfPointsInSpace = Math.floor((currenWindowWidth - this.pacmanSize) / (this.sizeOfPoints + this.spaceBetweenPoints)) || 0;
      this.pointsArray = new Array(this.amountOfPointsInSpace);
  }

  ngAfterViewInit(){
    this.calculateWindowSize();
    this.cdr.detectChanges();
  }

  ngOnInit(){
    this.pathForBackground = this.config.backgroundForPacman
  }

  get marginInPx():string{
    const number = this.spaceBetweenPoints / 2
    return `${number}px`
  }

  get urlBackground():string{
    return `url(${this.pathForBackground})`
  }

}
