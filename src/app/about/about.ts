import { Component } from '@angular/core';
import { Awards } from "../awards/awards";

@Component({
  selector: 'app-about',
  imports: [Awards],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  photographer = {
    name: 'Mariusz',
    origin: 'Poland',
    location: 'Vienna, Austria',
    bio: `I am Mariusz, a professional photographer from Poland, now based in the heart of Vienna. 
    I specialize in fine-art, wedding, and portrait photography, and I've had the pleasure of working with over a thousand clients from all walks of life.`,
    philosophy: `My mission is to capture more than just a picture- I aim to tell a story.I believe in the beauty of natural light, real emotions, and authentic moments.Every photo session is a unique experience, and I strive to make each one relaxed, enjoyable, and unforgettable.`



  };

}
