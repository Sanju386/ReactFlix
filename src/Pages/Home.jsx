// import React from 'react'
import Slider from "../Components/Slider";
import Wrapper from "../Components/Wrapper";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";
import { useFetch } from "../Hooks/useFetch";
import { useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);
  const [data, loading, error] = useFetch("movie/popular", { page: page });
  const { results, total_pages } = data;

  return (
    <>
      <Slider />

      <Wrapper>
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!error && !loading && (
          <>
            <h2 className="sectionTitle">Popular Movies </h2>
            <div className="gallery">
              {results?.map((ele) => {
                return <MovieCard key={ele.id} ele={ele} />;
              })}
            </div>
            <Pagination
              totalPages={total_pages}
              page={page}
              setPage={setPage}
            />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Home;
