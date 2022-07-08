let buttonDelete = document.querySelector('#delete');

function fetchPokeAPI() {
  let randomNumber = Math.floor(Math.random() * 905);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then(res => res.json())
      .then((pokemon) => {
        localStorage.setItem('pokemon', JSON.stringify(pokemon));
      })
};

fetchPokeAPI();

let pokemon = JSON.parse(localStorage.getItem('pokemon'));

function pokemonRender () {
  pokemon = JSON.parse(localStorage.getItem('pokemon'));

  const pokedex = document.getElementById('pokedex');
  const divPokemon = document.getElementById('pokemon');
  pokedex.removeChild(divPokemon);

  let newDivPokemon = document.createElement('div');
  newDivPokemon.id = 'pokemon';
  
  let pokemonTitle = document.createElement('h2');
  pokemonTitle.innerHTML = pokemon.name;

  let pokemonImage = document.createElement('img');
  pokemonImage.src = pokemon.sprites.front_default;
  pokemonImage.id = 'imgPokemon';

  let divType = document.createElement('div');
  divType.id = 'type';
  let titleType = document.createElement('h4');
  titleType.innerHTML = 'Tipo:';
  divType.appendChild(titleType);

  newDivPokemon.appendChild(pokemonTitle);
  newDivPokemon.appendChild(pokemonImage);

  pokemon.types.forEach((type) => {
    let pokemonType = document.createElement('p');
    pokemonType.innerHTML = type.type.name;

    divType.appendChild(pokemonType);
  });

  newDivPokemon.appendChild(divType);

  let divAbility = document.createElement('div');
  divAbility.id = 'ability';
  let titleAbility = document.createElement('h4');
  titleAbility.innerHTML = 'Habilidades:';
  divAbility.appendChild(titleAbility);

  pokemon.abilities.forEach((ability) => {
    let pokemonAbility = document.createElement('p');
    pokemonAbility.innerHTML = ability.ability.name;

    divAbility.appendChild(pokemonAbility);
  });

  newDivPokemon.appendChild(divAbility);
  pokedex.appendChild(newDivPokemon);

  buttonDelete.id = pokemon.name;
}

pokemonRender();

let deletedPokemons = localStorage.getItem('deletedPokemons');

// if (deletedPokemons) {
//   pokemon.
// };

buttonDelete.addEventListener('click', (a) => {
  fetchPokeAPI();
  pokemonRender();

  console.log(a.target.id)
});
