import { useEffect, useState } from "react";

function PokemonListFetch() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((response) => response.json())
      .then((dataJson) => setPokemons(dataJson.results))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);
  // console.log({pokemons})

  return (
    <div className="pokemon-container">
      <h2 className="titulo">🐱‍🏍 Lista de Pokémon</h2>
      <div className="pokemon-list">
        {pokemons.map((pokemon, index) => (
          <div className="pokemon-card" key={index}>
            <p className="pokemon-nombre">{pokemon.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonListFetch;
