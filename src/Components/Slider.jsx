import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import splideOptions from "../data";
import { useSlider } from "../Hooks/useSlider";

const Slider = () => {
  const output = useSlider("movie/now_playing");
  const { results } = output;

  return (
    <div className="movieSlider">
      <Splide options={splideOptions}>
        {results?.map(({ backdrop_path, original_title, id }) => {
          return (
            <SplideSlide key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
                alt=""
              />
              <div className="slideCaption">
                <h2>{original_title}</h2>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Slider;

















//Version -1 --fetching data

// const [latestMovies, setLatestMovies] = useState([]);
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const { data } = await axios({
//         method: "get",
//         url: "https://api.themoviedb.org/3/movie/now_playing",
//         params: {
//           api_key: "e3ef60114f3455d412ea55db83f798b2",
//         },
//       });

//       setLatestMovies(data.results);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchData();
// }, []);
