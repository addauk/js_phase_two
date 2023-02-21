// file: api.js

class PokemonAPI {
  fetchPokemon(name) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        let types = [];
        data.types.forEach((element) => {
          types.push(element.type.name);
        });
        let object = {
          name: data.name,
          id: data.id,
          height: data.height,
          weight: data.weight,
          types: types,
        };
        return object;
      });
  }
}

module.exports = PokemonAPI;
