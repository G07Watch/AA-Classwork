import React from "react";
import { Link } from "react-router-dom";


const PokemonIndexItem = (props) => {
    return (<li>
                <Link to="/pokemon/:pokemonId">
                    {props.pokemon.name}
                    <img src={`${props.pokemon.image_url}`} className="small"></img>
                </Link>
            </li>
    )
}
export default PokemonIndexItem;