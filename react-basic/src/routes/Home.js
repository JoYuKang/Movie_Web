import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home(){

  const [loaing, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    //const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    //const json = await response.json();
    setMovies(json.data.movies);
    setLoding(false);
  };
  useEffect(() => {
    getMovies();
    // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    // .then((response) => response.json())
    // .then(json => {
    //   setMovies(json.data.movies);
    //   setLoding(false);
  }, []);
  //console.log(movies);
  return (
    <div>
      {loaing ? (
        <h1>loaing...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id = {movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            ></Movie>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;