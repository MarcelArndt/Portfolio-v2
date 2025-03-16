import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { loginAnimtion } from './gsap-intro-animation';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-intro-animation',
  imports: [CommonModule],
  templateUrl: './intro-animation.component.html',
  styleUrl: './intro-animation.component.scss'
})
export class IntroAnimationComponent {

  @ViewChild('animationScreen') title!:ElementRef | undefined
  
  checkSessionStorageForAnimation():boolean{
    const isAnimation = JSON.parse(sessionStorage.getItem("alreadyAnimation") || "false")
    if(!isAnimation) {
      sessionStorage.setItem("alreadyAnimation", "true")
      return false
     }
    if(isAnimation) return true
    return false
  }

  ngAfterViewInit() {
    const isAnimation = this.checkSessionStorageForAnimation()
    console.log(isAnimation)
    if(isAnimation){
      this.title?.nativeElement.classList.add("displayOff")
      return
    }
    loginAnimtion();
  }


}
