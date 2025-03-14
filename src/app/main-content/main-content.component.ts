import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeadNavigationComponent } from '../head-navigation/head-navigation.component';
import { IntroAnimationComponent } from '../intro-animation/intro-animation.component';

@Component({
  selector: 'app-main-content',
  imports: [HeroSectionComponent, HeadNavigationComponent, IntroAnimationComponent ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
