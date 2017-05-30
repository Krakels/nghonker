import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  audio = new Audio('/assets/sound.mp3');
  playSound() {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}
