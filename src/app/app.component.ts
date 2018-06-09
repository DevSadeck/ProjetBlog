import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  posts = [
    {
      title: 'Mon premier post',
      content: ' ceci est le contenu du premier post ceci est le contenu du premier post ceci est le contenu du premier post ceci est le contenu du premier post ceci est le contenu du premier post ceci est le contenu du premier post',
      loveIts: 0,
      created_at :new Date()
    },
    {
      title: 'Mon dexième post',
      content: ' ceci est le contenu du deuxieme post ceci est le contenu du deuxieme post ceci est le contenu du deuxieme post ceci est le contenu du deuxieme post ceci est le contenu du deuxieme post ceci est le contenu du deuxieme post',
      loveIts: 0,
      created_at:new Date()
    },
    {
      title: 'Mon troisième post',
      content: ' ceci est le contenu du troisieme post ceci est le contenu du troisieme post ceci est le contenu du troisieme post ceci est le contenu du troisieme post ceci est le contenu du troisieme post ceci est le contenu du troisieme post',
      loveIts: 0,
      created_at: new Date()
    }
  ];

}
