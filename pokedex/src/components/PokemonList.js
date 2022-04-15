import React from 'react'
import {ListWrapper, HeaderWrapper, Header2, ListItem, PikaTail} from './styles'
import pikatail from '../assets/pikachu-icon-8.jpeg';


export default function PokemonList({pokemon}) {
  
  return (
    <React.Fragment>
      <HeaderWrapper>
        <PikaTail src={pikatail}/>
        <Header2>Cute little Pokemons</Header2>  
        <PikaTail src={pikatail}/>
      </HeaderWrapper>
      <ListWrapper>
        {pokemon.map(p => (
            <ListItem key={p}>{p}</ListItem>
        ))}
      </ListWrapper>
    </React.Fragment>
  )
}
