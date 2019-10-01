import React from 'react';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';
import {Link, Route} from 'react-router-dom';
import PokemonDetail from './pokemon_detail_container';

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
    return <div>
        <Route path={`/pokemon/:pokemonId`} component={PokemonDetail} />
        <ul>
          {pokeIndex}
        </ul>
    </div>
  }
}