import { useState, useEffect } from "react";
import axios from "axios";

function PokemonListAxios() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=7")
      .then((datos) => setPokemons(datos.data.results))
      .catch((error) => console.error("Error:", error));
  }, []);

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

export default PokemonListAxios;
