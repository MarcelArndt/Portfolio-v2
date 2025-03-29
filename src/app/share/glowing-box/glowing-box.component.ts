import { Component ,HostListener, Renderer2, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'glowing-box',
  imports: [CommonModule],
  templateUrl: './glowing-box.component.html',
  styleUrl: './glowing-box.component.scss'
})
export class GlowingBoxComponent {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

    positionX:number=0
    positionY:number=0

  @HostListener('mousemove', ['$event'])
    setPosition(event:MouseEvent){
      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();
    
      this.positionX = event.clientX - rect.left;
      this.positionY = event.clientY - rect.top; 

    }

  get positionLeft(){
    return `${this.positionX}px`
  }

  get positionTop(){
    return `${this.positionY}px`;
  }

}
