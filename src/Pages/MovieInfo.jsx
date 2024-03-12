// import React from 'react'
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import Wrapper from "../Components/Wrapper";

const MovieInfo = () => {
  const { id } = useParams();

  const [data] = useFetch(`movie/${id}`);
  // console.log(data);

const backdrop = {
backgroundImage :  `url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`
}


// key={lang.iso_639_1}

  return (
    <div className="moviePage" style={backdrop}>
      <Wrapper>
        <div className="movieContent">
          <div className="moviePoster">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
              alt=""
            />
          </div>

          <div className="movieInfo">
            <div className="movieTitle">
              <h1>{data?.title}</h1>
              <h3>{data?.tagline}</h3>
            </div>

            <div className="moviePlot">{data?.overview}</div>

            <div className="movieDetails">
              <div className="movieDetailsItem">
                {/* First Item */}

                <h3>Language</h3>
                <div >
                  {data?.spoken_languages?.map((lang) => {
                    return (
                      <>
                        <span key={lang.iso_639_1}> {lang.english_name}</span>
                      </>
                    );
                  })}
                </div>

                {/* Second Item */}

                <h3>Genre</h3>
                <div>
                  {data?.genres?.map((gen) => {
                    return (
                      <>
                        <span key={gen.id}> {gen.name}</span>
                      </>
                    );
                  })}
                </div>

                {/* Third Item */}

                <h3>Runtime</h3>
                <div>{data.runtime} Minutes </div>

                {/* Fourth Item */}

                <h3>Rating</h3>
                <div>{data.vote_average}</div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default MovieInfo;
