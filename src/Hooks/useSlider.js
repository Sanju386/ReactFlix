import axios from "axios";
import React, { useEffect, useState } from "react";

export const useSlider = (url) => {
  const [latestMovies, setLatestMovies] = useState([]);

  const option1 = {
    method: "get",
    baseURL: "https://api.themoviedb.org/3/",
    url: url,
    params: {
      api_key: "e3ef60114f3455d412ea55db83f798b2",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(option1);
        setLatestMovies(data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData()

  },[])
  


  return latestMovies


};



