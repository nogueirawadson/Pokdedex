const pokemon = document.querySelector(".container");

Pokemon = {};
const limit = 21;
let offset = 20;


window.onload = async  function pageOn() {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}$limit=${limit}`)
				const DATA = await data.json().catch((error) => console.error(error));
console.log(DATA)

Pokemon.results = DATA.results;

console.log(Pokemon.results)

  Pokemon.name = DATA.name;
  Pokemon.id = DATA.id;
  Pokemon.character = DATA.sprites.other.dream_world.front_default;
  Pokemon.experience = DATA.base_experience;
  Pokemon.abilities = abilities = DATA.abilities
    .map((res) => res.ability.name)
    .join(" | ");
  Pokemon.ability = [ability] = abilities.toUpperCase();
  Pokemon.types = types = DATA.types
    .map((typeSlot) => typeSlot.type.name)
    .join(" | ");
  Pokemon.type = [type] = types.toUpperCase();

  const newpage = results.map((poke) => `
  <h2> <img src="${poke.character}" alt="" </h2>
<li class="pokemons">

    <p class="id">ID:  ${poke.id} </p>

     <p class="name"> NAME: ${poke.name.toUpperCase()} </p>
      <p class="experience"> EXPERIENCE: ${poke.experience} </p>
       <p class="type"> TYPE: ${poke.type} </p>
        <p class="abilities"> ABILITIES:  ${poke.ability} </p>
    
    </li>

`);
  return (pokemon.innerHTML += newpage);
};

