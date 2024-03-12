import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const MovieCard = ({ele}) => {
  //  console.log(props)
   const {id, title, vote_average, poster_path } = ele
 

  return (
    <div key={id} className="movieCard">
      <Link to={`/movie/${id}`}>
        <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
        ></img>
      </Link>

      <div className="movieCardFooter">
        <div className="movieCardDetails">
          <h2 className="movieCardTitle">{title}</h2>
          <p className="movieCardRating">{vote_average}</p>
        </div>
        <FavoriteButton ele={ele} />
      </div>
    </div>
  );
};

export default MovieCard;
