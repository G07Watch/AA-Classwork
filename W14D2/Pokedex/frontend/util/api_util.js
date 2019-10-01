export const fetchAllPokemon = ()=>{
  return (
    $.ajax({
    method: 'GET',
    url: '/api/pokemon/'
  })
  )
};

export const fetchPokemon = (pokemonId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/pokemon/${pokemonId}`
    })
  )
};



window.fetchAllPokemon = fetchAllPokemon  //DEVELOPMENT TESTING PURPOSES ONLY!! REMOVE FOR PROD