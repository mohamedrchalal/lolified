import { Component, Inject } from '@angular/core';
import { ChampService } from './champ.service'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  providers: [ChampService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  champs = [];

  constructor(private champService: ChampService) {}
  // public title= 'app works!';
  sub() {
    this.champService.getChampData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}

// http://ddragon.leagueoflegends.com/cdn/6.17.1/img/champion/${championPNG}
