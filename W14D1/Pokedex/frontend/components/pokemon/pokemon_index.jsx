import React from 'react';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';

export class PokemonIndex  extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
      // debugger
    this.props.requestAllPokemon();
  }

  render(props) {
    let pokeIndex = this.props.pokemon.map(poke => (
            <PokemonIndexItem key={poke.id} pokemon={poke} />
        ));
    // debugger
    return <ul>
      {pokeIndex}
    </ul>
  }
}