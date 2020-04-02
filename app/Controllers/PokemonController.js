import PokemonService from "../Services/PokemonService.js";
import store from '../store.js'


function _draw(){
  let wildPokemon = store.State.wildPokemon;
  let template = ''
  wildPokemon.forEach(pokemon => {
    template += `<button class="brn btn-primary btn-block" onclick="app.pokemonController.showStats('${pokemon.name}')">${pokemon.name}</button>`
  })
  document.getElementById('wild-pokemon').innerHTML = template
  console.log(wildPokemon)
}

function _drawStats(){
  document.getElementById('card').innerHTML = store.State.activePokemon.Template
  console.log("test", store.State)
}


function _drawMyPokemon(){
  let myPokemon = store.State.myPokemon
  let template = ''
  myPokemon.forEach(pokemon => template += pokemon.Template)
  document.getElementById('my-pokemon').innerHTML = template
}

//Public
export default class PokemonController {
  constructor() {
    console.log('Pokemon controller');

    store.subscribe('wildPokemon', _draw);
    store.subscribe('activePokemon', _drawStats)
    store.subscribe('myPokemon', _drawMyPokemon)
  }

  showStats(pokemonName){
    PokemonService.showStats(pokemonName)
  }


  catch(){
    PokemonService.catch()
  }

  release(pokemonId){
    PokemonService.delete(pokemonId)
  }
}
