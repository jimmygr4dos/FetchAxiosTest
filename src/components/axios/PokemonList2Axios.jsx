import { useState, useEffect } from "react";
import axios from "axios";

function PokemonList2Axios() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // Paso 1: Obtener la lista base
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=7")
      .then((response) => {
        const promises = response.data.results.map((pokemon) =>
          axios.get(pokemon.url).then((res) => ({
            name: res.data.name,
            image: res.data.sprites.front_default,
            types: res.data.types.map((t) => t.type.name)
          }))
        );
        Promise.all(promises).then((details) => setPokemons(details));
      })
      .catch((error) => console.error("Error:", error));
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

export default PokemonList2Axios;
