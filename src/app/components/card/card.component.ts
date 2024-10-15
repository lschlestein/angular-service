import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClient } from '@angular/common/http'
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  pokemon?:PokemonData
  constructor(private service: PokemonService) {
  }
  ngOnInit(): void {
    this.getPokemon('pikachu')
  }
  getPokemon(searchName:string){
    this.service.getPokemon(searchName.toLowerCase()).subscribe(
      {
        next: (res) =>
          { this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types:res.types
          }
          console.log(this.pokemon)
          },
        error: (err) => console.log(err)
      }
    )
  }
}
