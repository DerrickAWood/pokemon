export default class Pokemon {
    
    constructor(data) {
        this.name = data.name
        this.img = data.sprites ? data.sprites.front_shiny || '' : data.img || ''
        this.weight = data.weight
    };
    

    get Template() {
        return /*html*/ `
        <img src="${this.img}">
        <h3 class="text-light"> ${this.name} </h3>
        <p class="text-light">Weight: ${this.weight}</p>
        <button class="btn btn-danger" onclick="app.pokemonController.catch()">Catch!</button>
        `
    }
    
}

console.log('Pokemon model');
