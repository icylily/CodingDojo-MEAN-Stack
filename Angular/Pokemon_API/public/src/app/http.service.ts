import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon() {
    let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/3/');
    pokemon.subscribe(data => {
      console.log(data);
      let ability1 = data.abilities[0].ability.name;
      let ability2 = data.abilities[1].ability.name
      console.log(data.forms[0].name, "'s ablilities are", ability1, "and", ability2);

      let has_ability1 = this._http.get(data.abilities[0].ability.url);
      let has_ability2 = this._http.get(data.abilities[1].ability.url);
      has_ability1.subscribe(data => { console.log(data.pokemon.length, 'Pokemon have  ', ability1, 'ability.'); })
      has_ability2.subscribe(data => { console.log(data.pokemon.length, 'Pokemon have  ', ability2, 'ability.'); })

    });
  }
}