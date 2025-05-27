import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const getMovies = async () => {
    //* update to TMDB API -> create branch
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${API_KEY}`,
    );
    const json = await response.json();
    setMovies(json.results);
    // setLoading(false);
  };
  //   console.log(movies);

  const getGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
    );
    const json = await response.json();
    console.log(json);
    setGenres(json.genres);
    // setLoading(false);
  };

  useEffect(() => {
    getMovies();
    getGenres();
    setLoading(false);
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              //! key is so important
              key={movie.id}
              id={movie.id}
              coverImg={movie.poster_path}
              title={movie.title}
              year={movie.release_date.slice(0, 4)}
              summary={movie.overview}
              genres={genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
