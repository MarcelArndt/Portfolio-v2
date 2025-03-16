import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  github = "https://github.com/MarcelArndt/Marcel-Arndt"
  linkIn = "https://www.linkedin.com/in/profil-marcel-arndt/"
  email = "info@arndt-marcel.de"

  backgroundForPacman = "./backgrounds/maze.jpg"

  PathForText = {
    "heroSection" : "./text/hero-section.json",
    "aboutMeSection" : "./text/about-me-section.json",
    "navigation" : "./text/navigation.json",
    "pacman" : "./text/pacman.json"
  }



}
