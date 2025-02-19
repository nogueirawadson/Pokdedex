const input = document.querySelector(".input");
const get = document.querySelector(".put");
const pokemons = document.querySelector(".container");

async function getpoke(pokemonName) {
  try {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!data.ok) {
      throw new Error(`HTTP erro! statu: ${data.status}`);
    }
    const DATA = await data.json();

    const Pokemon = {
      name: DATA.name,
      id: DATA.id,
      character: DATA.sprites.other.dream_world.front_default,
      experience: DATA.base_experience,
      abilities: DATA.abilities.map((res) => res.ability.name).join(" | "),
      types: DATA.types.map((typeSlot) => typeSlot.type.name.toUpperCase()),
    };
    const newPage = `
  
    <h2> <img src="${Pokemon.character}" alt="${Pokemon.name}" </h2>
      <li class="pokemons">
        <p class="id">ID: ${Pokemon.id} </p>
        <p class="name">NAME: ${Pokemon.name.toUpperCase()} </p>
        <p class="experience">EXPERIENCE: ${Pokemon.experience} </p>
        <p class="type">TYPE: ${Pokemon.types} </p>
        <p class="abilities">ABILITIES: ${Pokemon.abilities.toUpperCase()} </p>
      </li>

    `;
    return newPage;
  } catch (error) {
    console.error("Ocorreu um erro ao buscar Pokemón: ", error);
    return "<p>Pokémon não encontrado ou erro na requisição.</p>";
  }
}
input.addEventListener("keyup", async (event) => {
  if (event.key === "Enter") {
    const PokemonName = input.value;
    const PokemonHTML = await getpoke(PokemonName);
    pokemons.innerHTML = PokemonHTML;
    input.value = "";
  }

  get.addEventListener("click", async (event) => {
 
    const PokemonName = input.value;
    const PokemonHTML = await getpoke(PokemonName);
    pokemons.innerHTML = PokemonHTML;
    input.value = "";
    
  });

  const pageInitial = document.querySelector(".imagem");
  if (pageInitial) {
    pageInitial.remove();
  }
});
