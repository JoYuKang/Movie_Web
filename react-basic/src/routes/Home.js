import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

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
  console.log(movies);

  
  return (
    
    <div>
      <section className={styles.container}>
      {loaing ? (
        <h1>loaing...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id = {movie.id}
              year={movie.year}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            ></Movie>
          ))}
        </div>
      )}
      </section>
    </div>
  );
}

export default Home;