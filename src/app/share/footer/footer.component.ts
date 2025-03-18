import { Component } from '@angular/core';
import { TextService } from '../../text.service';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, IconComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public textService : TextService, public config: ConfigService){}




}
