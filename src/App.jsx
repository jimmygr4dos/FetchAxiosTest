import './App.css'
import "./PokemonList.css";
import PokemonListFetch from './components/fetch/PokemonListFetch'
import PokemonList2Fetch from './components/fetch/PokemonList2Fetch'
import PokemonListAxios from './components/axios/PokemonListAxios'
import PokemonList2Axios from './components/axios/PokemonList2Axios'

function App() {
  return (
    <>
      {/* <PokemonListFetch /> */}
      {/* <PokemonList2Fetch /> */}
      {/* <PokemonListAxios /> */}
      <PokemonList2Axios />
    </>
  )
}

export default App
