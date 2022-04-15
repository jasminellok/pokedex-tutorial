import React from 'react'
import {ListWrapper, Header2, ListItem} from './styles'

export default function PokemonList({pokemon}) {
  
  return (
    <ListWrapper>
        <Header2>Cute little Pokemons </Header2>
        {pokemon.map(p => (
            <ListItem key={p}>{p}</ListItem>
        ))}
    </ListWrapper>
  )
}
