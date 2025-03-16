import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { BurgermenuComponent } from '../burgermenu/burgermenu.component';
import { TextService } from '../../text.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'head-navigation',
  imports: [ IconComponent, BurgermenuComponent, CommonModule  ],
  templateUrl: './head-navigation.component.html',
  styleUrl: './head-navigation.component.scss'
})
export class HeadNavigationComponent {
  constructor(public textService: TextService){}


  

}
