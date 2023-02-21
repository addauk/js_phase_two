// inside api.test.js
const PokemonAPI = require("./api");

describe("fetchPokemon", () => {
  it("returns a promise of the useful pokemon data", (done) => {
    new PokemonAPI().fetchPokemon("charizard").then((pokemon) => {
      expect(pokemon.id).toEqual(6);
      done();
    });
  });
});
