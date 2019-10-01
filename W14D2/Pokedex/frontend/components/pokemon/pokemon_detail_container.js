import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail  from './pokemon_detail';

const mapStateToProp = (state) => {
  debugger;
  return ({
    pokemon: state.pokemon,
    items: state.items
  })
}

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
})


export default connect(mapStateToProp,mapDispatchToProps)(PokemonDetail);