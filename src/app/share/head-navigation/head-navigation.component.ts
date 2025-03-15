import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { BurgermenuComponent } from '../burgermenu/burgermenu.component';

@Component({
  selector: 'head-navigation',
  imports: [ IconComponent, BurgermenuComponent ],
  templateUrl: './head-navigation.component.html',
  styleUrl: './head-navigation.component.scss'
})
export class HeadNavigationComponent {

}
