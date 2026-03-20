for (let i = 1; i <= 1026; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("pokedex");
      container.innerHTML += `
        <div class="pokemon">
            <img src="${data.sprites.front_default}" />
            <p>Nr: ${data.id}</p>
            <h3>${data.name} </h3>
        </div>
      `;
    });
}