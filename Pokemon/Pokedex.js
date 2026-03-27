for (let i = 1; i <= 105; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("pokedex-1");
      container.innerHTML += `
        <button popovertarget="${data.id}-profil" id="${data.id}" class="pokemon">
            <img src="${data.sprites.front_default}" />
            <p>Nr: ${data.id}</p>
            <h3>${data.name} </h3>
        </button>
        <dialog class="PokemonPopUp" id="${data.id}-profil" popover>
          <img  class="main" src="${data.sprites.front_default}" />
          <p>${data.name} | Id: ${data.id}</p>
          <p>Type: ${data.types.map(t => t.type.name).join(", ")}</p>
          <p>Height: ${(data.height / 10).toFixed(1)}m</p>
          <p>Weight: ${(data.weight / 10).toFixed(1)}kg</p>
          <p>Shiny:</p>
          <img src="${data.sprites.front_shiny}" />
        </dialog>
      `;
    });
}

for (let i = 106; i <= 210; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("pokedex-2");
      container.innerHTML += `
        <button popovertarget="${data.id}-profil" id="${data.id}" class="pokemon">
            <img src="${data.sprites.front_default}" />
            <p>Nr: ${data.id}</p>
            <h3>${data.name} </h3>
        </button>
        <dialog class="PokemonPopUp" id="${data.id}-profil" popover>
          <img  class="main" src="${data.sprites.front_default}" />
          <p>${data.name} | Id: ${data.id}</p>
          <p>Type: ${data.types.map(t => t.type.name).join(", ")}</p>
          <p>Height: ${(data.height / 10).toFixed(1)}m</p>
          <p>Weight: ${(data.weight / 10).toFixed(1)}kg</p>
          <p>Shiny:</p>
          <img src="${data.sprites.front_shiny}" />
        </dialog>
      `;
    });
}

for (let i = 211; i <= 315; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("pokedex-3");
      container.innerHTML += `
        <button popovertarget="${data.id}-profil" id="${data.id}" class="pokemon">
            <img src="${data.sprites.front_default}" />
            <p>Nr: ${data.id}</p>
            <h3>${data.name} </h3>
        </button>
        <dialog class="PokemonPopUp" id="${data.id}-profil" popover>
          <img  class="main" src="${data.sprites.front_default}" />
          <p>${data.name} | Id: ${data.id}</p>
          <p>Type: ${data.types.map(t => t.type.name).join(", ")}</p>
          <p>Height: ${(data.height / 10).toFixed(1)}m</p>
          <p>Weight: ${(data.weight / 10).toFixed(1)}kg</p>
          <p>Shiny:</p>
          <img src="${data.sprites.front_shiny}" />
        </dialog>
      `;
    });
}