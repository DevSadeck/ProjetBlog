import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() titre: string;
  @Input() contenu: string;
  @Input() laDate: Date;
  etatDesLoves : string ="egalite";
  constructor() { }

  loveIt : number = 0;

  

  ngOnInit() {
  }

  augmenterLove(){
    this.loveIt ++;
    this.verifierLeSupperieur();
  }

  augmenterDontLove(){
    this.loveIt --;    
    this.verifierLeSupperieur();
  }


  verifierLeSupperieur(){

    if (this.loveIt > 0)
    {
      this.etatDesLoves ="plusDeLove"
    }
    else if(this.loveIt < 0)
    {
      this.etatDesLoves ="moinDeLove"
    }
    else
    {
      this.etatDesLoves ="egalite"
    }
  }

}
