const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertePokemonEmLi(pokemon) {
    return ` 
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                   <ol class="types">
                      <li class="type">Grass</li>
                      <li class="type">Poison</li>
                  </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
                 alt="${pokemon.name}">
            </div>
        </li> 
    `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonsList) => {

        for(let i = 0; i < pokemonsList.lenght; i++){
            const pokemon = pokemonsList[i];
            pokemonList.innerHTML += convertePokemonEmLi(pokemon) 
        }
    })
    .catch((error) => console.error(error))
