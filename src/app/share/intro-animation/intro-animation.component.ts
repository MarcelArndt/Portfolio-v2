import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-animation',
  imports: [CommonModule],
  templateUrl: './intro-animation.component.html',
  styleUrl: './intro-animation.component.scss'
})
export class IntroAnimationComponent {
  isAnimation:boolean = false

  ngOnInit(){
    this.checkAnimation()
  }

  checkAnimation(){
    this.isAnimation = JSON.parse(sessionStorage.getItem("alreadyAnimation") || "false")
    if(this.isAnimation) return
    if(!this.isAnimation){
      sessionStorage.setItem("alreadyAnimation", "true")
      document.body.classList.add('no-scroll')
      setTimeout(() => {
        document.body.classList.remove('no-scroll')  
      }, 5000)
    }
  }


}
