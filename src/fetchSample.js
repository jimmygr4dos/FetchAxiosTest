function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then(response => response.json())
      .then(data => setPokemons(data.results))
      .catch(error => console.error("Error al obtener datos:", error));
  }, []);
  return (
    <div>
      <h2>Lista de Pokémon</h2>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}