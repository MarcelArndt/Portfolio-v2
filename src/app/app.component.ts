import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TextService } from './text.service';
import { ConfigService } from './config.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private textService: TextService){}
  title = 'portfolio';


  ngOnInit(){
    this.textService.getNewLanguageData();
  }


}
