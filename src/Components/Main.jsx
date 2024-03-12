



const Main = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;




//Version -1 for fetching data

// const [popMovies, setPopMovies] = useState([]);
// const [totalPages, setTotalPages] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const { data } = await axios({
//         method: "get",
//         url: "https://api.themoviedb.org/3/movie/popular",
//         params: {
//           api_key: "e3ef60114f3455d412ea55db83f798b2",
//           page: page,
//         },
//       });

//       setPopMovies(data.results);
//       setTotalPages(data.total_pages);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, [page]);
