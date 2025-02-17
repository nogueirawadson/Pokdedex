const put = document.querySelector(".input");
const pokemons = document.querySelector(".container");

Pokemon = {};
getPoke();

async function getPoke() {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${put.value}`);
  const DATA = await data.json().catch((error) => console.error(error));

  Pokemon.name = DATA.name;
  Pokemon.id = DATA.id;
  Pokemon.character = DATA.sprites.other.dream_world.front_default
  Pokemon.experience = DATA.base_experience
  Pokemon.abilities = abilities = DATA.abilities
    .map((res) => res.ability.name)
    .join(" | ");
  Pokemon.ability = [ability] = abilities.toUpperCase();
  Pokemon.types = types = DATA.types
    .map((typeSlot) => typeSlot.type.name)
    .join(" | ");
  Pokemon.type = [type] = types.toUpperCase();

  const newpage = `
  <h2> <img src="${Pokemon.character}" alt="" </h2>
<li class="pokemons">

    <p class="id">ID:  ${Pokemon.id} </p>

     <p class="name"> NAME: ${Pokemon.name.toUpperCase()} </p>
      <p class="experience"> EXPERIENCE: ${Pokemon.experience} </p>
       <p class="type"> TYPE: ${Pokemon.type} </p>
        <p class="abilities"> ABILITIES:  ${Pokemon.ability} </p>
    
    </li>

`;
  return (pokemons.innerHTML += newpage);
}
