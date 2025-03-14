import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  github = "https://github.com/MarcelArndt/Marcel-Arndt"
  linkIn = "https://www.linkedin.com/in/profil-marcel-arndt/"
  email = "info@arndt-marcel.de"

}
