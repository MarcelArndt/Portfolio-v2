import { Injectable} from '@angular/core';
import { ConfigService } from './config.service';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TextService {
  constructor(public config: ConfigService) { }
  private textSubject = new BehaviorSubject<any>({});
  texte$ = this.textSubject.asObservable();

  currentLanguage:string[] = ["german", "DE"]
  isLoading = true;

  async getNewLanguageData(){
    this.textSubject.next({});
    const AllKeys = Object.keys(this.config.PathForText) as Array<keyof typeof this.config.PathForText>;
    const promises = AllKeys.map(async (key) => {
      const url = this.config.PathForText[key];
      const response = await fetch(url);
      const data = await response.json();
      this.textSubject.next({... this.textSubject.value, [key]:data[this.currentLanguage[0]]})
    });
    await Promise.all(promises);
    console.log(this.textSubject.value)
  }

  async switchLanguage(currentLanguage:string = "DE"){
    switch(currentLanguage){
      case "DE": this.currentLanguage = ["english", "ENG"]; break;
      case "ENG": this.currentLanguage = ["german", "DE"]; break;
    }
    await this.getNewLanguageData();
  }


}
