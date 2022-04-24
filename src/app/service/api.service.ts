import { IResponse, IPokeProps } from './../interface/IResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public data: IResponse = {} as IResponse;
  public pokemons: IPokeProps[] = [];
  public more: IPokeProps[] = [];
  public poke = {};

  constructor(private http: HttpClient) {
    this.getAllPokemons();
  }

  getAllPokemons() {
    const api = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`;

    this.http
      .get<IResponse>(api)
      .pipe(
        map((response) => {
          this.data = response;
          return response;
        }),
        map((response1) => {
          return from(response1.results).pipe(
            mergeMap((response2) => this.http.get<IPokeProps>(response2.url))
          );
        }),
        mergeMap((response3) => response3)
      )
      .subscribe((res) => {
        this.pokemons[res.id] = {
          id: res.id,
          name: res.name,
          types: res.types,
          stats: res.stats,
          pokeTypes: res.types.map((item) => item.type.name),
          pokeStatsPower: res.stats.map((item) => item.base_stat),
          pokeStatsName: res.stats.map((item) => item.stat.name),
          abilities: res.abilities,
        };
      });
  }

  moreData() {
    this.http
      .get<IResponse>(this.data.next)
      .pipe(
        map((response) => {
          this.data = response;
          return response;
        }),
        map((response1) => {
          return from(response1.results).pipe(
            mergeMap((response2) => this.http.get<IPokeProps>(response2.url))
          );
        }),
        mergeMap((response3) => response3)
      )
      .subscribe((res) => {
        this.pokemons[res.id] = {
          id: res.id,
          name: res.name,
          types: res.types,
          stats: res.stats,
          pokeTypes: res.types.map((item) => item.type.name),
          pokeStatsPower: res.stats.map((item) => item.base_stat),
          pokeStatsName: res.stats.map((item) => item.stat.name),
          abilities: res.abilities,
        };

      });
  }

  //   map((value: IResponse) => {
  //     return from(value).pipe(mergeMap((v: any) => this.http.get(v.url)));
  //   }),
  //   mergeMap((value) => value)
  // )
  // .subscribe(
  //   (result: any) =>
  //     (this.pokemons[result.id] = {
  //       img: result.sprites.front_default,
  //       name: result.name,
  //       types: result.types.map((t: any) => t.type.name),
  //     })
  // );
  // getAllPokemons() {
  //   this.http.get<any>('https://pokeapi.co/api/v2/pokemon').forEach((res) => {
  //     this.pokemons = res.results;

  //     const poke = this.pokemons.map((item: IResponse) => {
  //       return {
  //         name: item.name,
  //         url: item.url,
  //         pokemonNumberUrl: item.url
  //           .replace('https://pokeapi.co/api/v2/pokemon/', '')
  //           .replace('/', ''),
  //       };
  //     });
  //     this.pokemons = poke;
  //   });
  // }
}
