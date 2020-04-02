export default class MyPokemon{
  constructor(data){
    this.id = data._id || ''
    this.types = data.types || []
    this.name = data.name || ''
    this.img = data.img || ''
    this.weight = data.weight || ''
    this.user = data.user
  };
  
  get Template(){
    return /*html*/ `
      <img src="${this.img}" alt="">
      <h5 class="text-capitalize">${this.name}</h5>
      <p>Weight: ${this.weight}</p>
      <button class="btn btn-block btn-warning" onclick="app.pokemonController.release('${this.id}')">Release</button>
    `
  }
}