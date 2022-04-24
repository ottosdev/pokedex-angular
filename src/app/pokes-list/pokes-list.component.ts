import { IPokeProps } from './../interface/IResponse';

import { ApiService } from './../service/api.service';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokes-list',
  templateUrl: './pokes-list.component.html',
  styleUrls: ['./pokes-list.component.css'],
})
export class PokesListComponent implements OnInit, DoCheck {
  public pokes: IPokeProps[] = [];
  public pokesFilter: any[] = [];
  public search: string = '';
  public loading: boolean = false;
  constructor(public service: ApiService) {
    this.loadPokemon();
  }

  ngDoCheck(): void {

    this.filtrar(this.search);
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.loadPokemon();
    }, 6000);
  }

  loadPokemon() {
    if (!this.loading) {
      setTimeout(() => {
        this.pokes = this.service.pokemons;
        this.loading = true;
      }, 1);
    }
  }

  filtrar(value: string): IPokeProps[] {
    if (!value) {
      this.pokes = this.service.pokemons;
    }
    this.pokes = this.pokes.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    return this.pokes;
  }

  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  more() {
    this.service.moreData();
    console.log(this.service.pokemons);
  }
}
