// import Header from "./Components/Header";
// import Main from "./Components/Main";
// import Footer from "./Components/Footer";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites"
import MovieInfo from "./Pages/MovieInfo"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/movie/:id" element={<MovieInfo/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
