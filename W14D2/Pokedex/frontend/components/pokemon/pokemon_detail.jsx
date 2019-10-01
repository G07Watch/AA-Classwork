import React from 'react'
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import {Link, Route} from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId).bind(this); 
  }

  render() {
    debugger
    const pokemon = this.props.pokemon;

    if (this.props.pokemon.keys){ 
      
      const pokemonAttrKeys = this.props.pokemon.keys.filter(key => {
      if ((key != image_url) || (key != item_ids) || (key != id)){
       return key;
      }
      });
    
      const pokemonAttr = pokemonAttrKeys.map(attr => {
          return (
            <li key={attr}>
              {pokemon[attr]}
            </li>);
        });

      const items = this.props.items.each(item => {
          return <li to=""> <img scr={item.image_url} alt={item.name}></img>
          </li>
      });
    }
    debugger
    return (
      <section className="pokemon-detail">
        <figure>
          <img src={pokemon.image_url} alt="" />
        </figure>
        <ul>
          {pokemonAttr}
        </ul>
        <section className="toys">
            <h3>Items</h3>
            <ul className="toys-list">
                {items}
            </ul>
        </section>

      </section>
    )
  }

}

export default PokemonDetail;