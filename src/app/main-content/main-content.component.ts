import { Component, AfterViewInit} from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeadNavigationComponent } from '../share/head-navigation/head-navigation.component';
import { IntroAnimationComponent } from '../share/intro-animation/intro-animation.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';

import { maincContentAnimation } from './gsap';
import { FooterComponent } from '../share/footer/footer.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';



@Component({
  selector: 'app-main-content',
  imports: [HeroSectionComponent, HeadNavigationComponent, IntroAnimationComponent, AboutMeSectionComponent, FooterComponent, SkillsSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  ngAfterViewInit(){
    maincContentAnimation();
  }
}
