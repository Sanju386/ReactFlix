// import React from 'react'

import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import Wrapper from "../Components/Wrapper";
import MovieCard from "../Components/MovieCard";

const Favorites = () => {
  const { state } = useContext(AppContext);
  console.log(state.favorites);

  return (
    <Wrapper>
      <div className="gallery">
        {state.favorites?.map((item) => {
          return <MovieCard key={item.id} ele={item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Favorites;
