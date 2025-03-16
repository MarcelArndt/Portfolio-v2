import { Component } from '@angular/core';
import { IconComponent } from '../../share/icon/icon.component';

@Component({
  selector: 'about-me-section',
  imports: [IconComponent ],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

  currentNaviValue:number = 0

  swicthCurrentNaviValue(newNaviValue:number = 0){
    this.currentNaviValue = newNaviValue;
  }

  




}
