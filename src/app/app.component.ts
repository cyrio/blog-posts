import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts: Post[] = [
    {
      title : "Mon Premier Post",
      content: " ceci est le premier contenu posté, il y en aura bien d'autres, Allez on rédige!",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title : "Le Second Post",
      content: " Déjà le second contenu posté, c'est encourageant! Allez du code et de la rédaction.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title : "Encore un Post",
      content: " encore un autre contenu posté, Bien joué! On ne s'arrête pas là.",
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
