import React, { useState } from "react";
import ComicInfo from "./ComicInfo";
import api from '../../services/api';

const SearchForm = () => {
  
  const [id, setId] = useState(0);
  const [hero, setHero] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    api.getHero(id).then((response) => {
      setHero(response.data.data.results[0])
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='number' value={id} id="hero" onChange={e => setId(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
    <ComicInfo hero={hero}/>
    </>
  );
};

export default SearchForm;
