import React, {useState, useEffect} from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

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
   }, 200);
    const {data: {results}} = resp;
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

  if(loading) {
    return (<div>LOADING...</div>)
  }

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
