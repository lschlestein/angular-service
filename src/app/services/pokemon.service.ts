import { Injectable } from '@angular/core';
import { environment } from '../../app/app.config'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string= environment.pokeApi
  private pokeData: PokemonData | any

  constructor(private http:HttpClient) { 
    this.pokeData = {
      id:0,
      name:'',
      sprites:{
        front_default: ''
      },
      types: [{
        slot:0,
        type: {
            name: '',
            url:''
        }
    }]
    }
  }

  getPokemon(pokemonName:string):Observable<PokemonData>{
    console.log(`${this.baseURL}${pokemonName}`)
    this.pokeData = this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`)
    return this.pokeData
  }
}
