import React from "react";
import { Link, Route } from "react-router-dom";
import PokemonDetail from "./pokemon_detail_container";


const PokemonIndexItem = (props) => {
    let pokemonId = props.pokemon.id;

    return (<li>
        <Link to={`/pokemon/${pokemonId}`}>
            {props.pokemon.name}
            <img src={`${props.pokemon.image_url}`} className="small"></img>
        </Link>
        <Route path={`/pokemon/:pokemonId`} component={PokemonDetail} />
    </li>
    )
}
export default PokemonIndexItem;