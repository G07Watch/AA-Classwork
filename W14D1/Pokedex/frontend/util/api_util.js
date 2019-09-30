export const fetchAllPokemon = ()=>{
  return (
    $.ajax({
    method: 'GET',
    url: '/api/pokemon/'
  })
  )
}



window.fetchAllPokemon = fetchAllPokemon  //DEVELOPMENT TESTING PURPOSES ONLY!! REMOVE FOR PROD