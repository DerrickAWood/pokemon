import Pokemon from "../Models/Pokemon.js";
import store from "../store.js";
import MyPokemon from "../Models/MyPokemon.js";



let _pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 15000
})

let _sandboxApi = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/Derrick/pokemon',
  timeout: 10000

})

//Public
class PokemonService {
catch() {
  _sandboxApi.post('', store.State.activePokemon)
    .then(res => {
      console.log('caught', res.data);
      this.getMyPokemon()
    })
    .catch(err => console.error(err))
}

getMyPokemon(){
  _sandboxApi.get()
  .then(res => {
    console.log('my pokemon', res.data.data);
    let myPokemon = res.data.data.map(pokemonRawData => new MyPokemon(pokemonRawData))
    store.commit("myPokemon", myPokemon)
  })
}
showStats(pokemonName) {
  _pokemonApi.get('pokemon/' + pokemonName)
    .then(res => {
      console.log('showStats', res.data)
      let pokemon = new Pokemon(res.data)
      store.commit('activePokemon', pokemon)
    })
    .catch(err => console.error(err))
}

delete(pokemonId){
  _sandboxApi.delete(pokemonId)
    .then(res => {
      console.log(res.data)
      this.getMyPokemon()
    })
    .catch(err => console.error(err))
}



constructor(){
  this.getWildPokemon()
  this.getMyPokemon()
}

getWildPokemon(){
  _pokemonApi.get('pokemon?limit=20')
  .then(res => {
    console.log('wild pokemon', res.data.results)
    store.commit('wildPokemon', res.data.results)
  })
}

}


const SERVICE = new PokemonService();

console.log('Pokemon service');

export default SERVICE;
