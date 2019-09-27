const fetchAllPokemon = ()=>{
  return (
    $.ajax({
    method: 'GET',
    url: '/api/pokemon/'
  })
  )
}

export default fetchAllPokemon;

window.fetchAllPokemon = fetchAllPokemon  //DEVELOPMENT TESTING PURPOSES ONLY!! REMOVE FOR PROD