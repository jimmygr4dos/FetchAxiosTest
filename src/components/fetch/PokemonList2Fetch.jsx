import { useEffect, useState } from "react";

function PokemonList2Fetch() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // Paso 1: obtener la lista de nombres y URLs
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((res) => res.json())
      .then((data) => {
        // Paso 2: realizar peticiones individuales para obtener más detalles
        const fetchDetails = data.results.map((pokemon) =>
          fetch(pokemon.url)
            .then((res) => res.json())
            .then((detail) => ({
              name: detail.name,
              image: detail.sprites.front_default,
              types: detail.types.map((t) => t.type.name)
            }))
        );

        Promise.all(fetchDetails).then((pokemonDetails) => {
          setPokemons(pokemonDetails);
        });
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <div className="pokemon-container">
      <h2 className="titulo">🐱‍🏍 Lista de Pokémon</h2>
      <div className="pokemon-list">
        {pokemons.map((pokemon, index) => (
          <div className="pokemon-card" key={index}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p className="pokemon-nombre">{pokemon.name.toUpperCase()}</p>
            <p className="pokemon-tipo">{pokemon.types.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList2Fetch;
