const put = document.querySelector(".input")
const pokemons  = document.querySelector(".pokemons")

Pokemon = {}
getPoke();


async function getPoke() {
    
const data = await  fetch(`https://pokeapi.co/api/v2/pokemon/${put.value}`)
const  DATA =  await data.json()
.catch(error => console.error(error));

Pokemon.name = DATA.name;
Pokemon.id = DATA.id;
Pokemon.character  = DATA.sprites.other.dream_world.front_default
Pokemon.experience = DATA.base_experience
Pokemon.abilities = abilities = DATA.abilities.map((res) => res.ability.name)
Pokemon.ability = [ability] = abilities
Pokemon.types = types = DATA.types.map((typeSlot)=> typeSlot.type.name)   
Pokemon.type = [type] = types

console.log(`Essa função está correta 
\n ${Pokemon.name}
\n ${Pokemon.id}
\n ${Pokemon.character}
\n ${Pokemon.experience}
\n ${Pokemon.ability}
\n ${Pokemon.type}

`)

const newpage = `
<li class="pokemons">
    <p class="id"> ${Pokemon.id} </p>
    <img src="${Pokemon.character}" alt="" name="pokemon"> 
     <p class="name"> ${Pokemon.name} </p>
      <p class="experience"> ${Pokemon.experience} </p>
       <p class="type"> ${Pokemon.type} </p>
        <p class="abilities"> ${Pokemon.ability} </p>
    
    </li>

` 
return pokemons.innerHTML += newpage;

}



