import { Component ,HostListener, input, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'glowing-box',
  imports: [CommonModule],
  templateUrl: './glowing-box.component.html',
  styleUrl: './glowing-box.component.scss'
})
export class GlowingBoxComponent {

@Input()width:any;
@Input()height:any;
@Input()glowColor:string = '#efefef';
@Input()backgroundColor:string = '#424242';
@Input()borderThickness:number = 2
@Input()borderRadius:number = 12

positionX:number=0;
positionY:number=0;

  @HostListener('mousemove', ['$event'])
    setPosition(event:MouseEvent){
      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();
    
      this.positionX = event.clientX - rect.left;
      this.positionY = event.clientY - rect.top; 

    }

  get boxBorderThickness(){
      return `${this.borderThickness}px`
  }

  get boxBorderRadius(){
      return `${this.borderRadius}px`
  }

  get boxWidth(){
    if (typeof this.width == "number"){
      return `${this.width}px`
    }
    return this.width
  }

  get boxHeight(){
    if (typeof this.width == "number"){
    return `${this.height}px`
    }
    return this.height
  }

  get positionLeft(){
    return `${this.positionX}px`
  }

  get positionTop(){
    return `${this.positionY}px`;
  }

}
