import React, {useState, useEffect} from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import Loading from "./components/Loading";
import axios from "axios";


function App() {
  const pg1Url = "https://pokeapi.co/api/v2/pokemon"
  const [pokemon, setPokemon] = useState([]);
  const [currPageUrl, setCurrPageUrl] = useState(pg1Url)
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPokemon();
  }, [currPageUrl]);

  const getPokemon = async () => {
    let cancel;
    const resp = await axios.get(currPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    });
    setTimeout(function(){
      setLoading(false);
   }, 600000);
    const {data: {results}} = resp;
    console.log(results)
    setNextPageUrl(resp.data.next);
    setPrevPageUrl(resp.data.previous);
    setPokemon(results.map(p => p.name));
    return () => cancel();
  };

  function goToNextPage() {
    setCurrPageUrl(nextPageUrl);
  }

  function goToPrevPage () {
    setCurrPageUrl(prevPageUrl);
  }

  if (loading) return <Loading/>;

  return (
    <div className="App">
      <PokemonList pokemon={pokemon}/>
      <Pagination 
        nxtPage={nextPageUrl ? goToNextPage : null}
        prvPage={prevPageUrl ? goToPrevPage : null}
      />
    </div>
  );
}

export default App;
