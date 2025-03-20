import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mainArticle: any;
  public otherArticles: any[] = [];

  constructor() { }

  ngOnInit(): void {
    if (dataFake.length > 0) {
      this.mainArticle = dataFake[0]; // Primeiro item como destaque
      this.otherArticles = dataFake.slice(1); // Restante dos artigos
    }
  }

}
