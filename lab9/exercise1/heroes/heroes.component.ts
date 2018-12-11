import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros = HEROES;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
//}
  constructor() { }

  ngOnInit() {
  }

}
