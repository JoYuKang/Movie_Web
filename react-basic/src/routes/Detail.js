import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import MovieDetail from "../components/MovieDetail";


function Detail(){
  const [loaing, setLoding] = useState(true);
  const [m, setMovies] = useState([]);
  const {id} = useParams();
  const getMovie = async () => {
    const json = await( 
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
      setMovies(json.data.movie);
      setLoding(false);
  }
  useEffect(() => {
   getMovie();
  }, [])
  
  return(
    <div>
      {loaing ? (
        <h1>loaing...</h1>
      ) : (
        <div>
            <MovieDetail
              key={m.id}
              id = {m.id}
              coverImage={m.large_cover_image}
              title={m.title}
              description_intro={m.description_intro}
              genres={m.genres}
              runtime = {m.runtime}
              torrents = {m.torrents}
            />
        </div>
      )}
    </div>
  );
}

export default Detail;