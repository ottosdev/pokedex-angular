import { IPokeProps } from './../interface/IResponse';
import { Component, Input, OnInit } from '@angular/core';
import { putZerosLeft, randomColors } from '../utils/utils';

import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-pokes-card',
  templateUrl: './pokes-card.component.html',
  styleUrls: ['./pokes-card.component.css'],
})
export class PokesCardComponent implements OnInit {
  public progressBarWidth: number = 0;
  public randomColor: string = randomColors();

  @Input()
  public pokemon: IPokeProps = {} as IPokeProps;

  @Input()
  public number: number = 0;

  getPokeImg() {
    const numberPokeImg = putZerosLeft(this.number);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberPokeImg}.png`;
  }

  ngOnInit(): void {
    // document.querySelectorAll('.card').forEach((item: any) => {
    //   VanillaTilt.init(item, {
    //     max: 25,
    //     speed: 500,
    //     glare: true,
    //     'max-glare': 0.8,
    //   });
    // });
  }
}
