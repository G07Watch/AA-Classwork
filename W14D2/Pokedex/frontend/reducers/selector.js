export const selectAllPokemon = (state) => {
    // debugger
    if (state.entities.pokemon) {
        return Object.values(state.entities.pokemon);
    }
}

window.selectAllPokemon = selectAllPokemon;