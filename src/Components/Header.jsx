import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { useFetch } from "../Hooks/useFetch";
import { Link } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState("");
  // console.log(input)

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const [data] = useFetch("/search/movie", { query: input });

  // console.log(data);



  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <h1>ReactFLIX</h1>
          </div>

         <h3> <Link to={'/favorites'}> Favorites</Link></h3>
         
          <div className="searchBox">
            <input
              onChange={handleChange}
              value={input}
              className="searchField"
              type="search"
            />

            <div className="resultBox">
              <ul>
                {data?.results?.map((ele) => {
                  return  <li key={ele.id} ><Link to={`movie/${ele.id}`}>{ele.title}</Link></li> 
                })}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
