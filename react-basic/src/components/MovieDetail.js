import PropTypes from "prop-types";
import "../css/styles.css";
import styles from "../css/MovieDetail.module.css";
function MovieDetail({
  key,
  coverImage,
  title,
  description_intro,
  genres,
  runtime,
  torrents,
}) {
  return (
    <div key={key} className={styles.movie}>
      <div>
        <img src={coverImage} alt={title} className={styles.movie__img}></img>
        
        <h1 className={styles.movie__title}>
        {title}
        </h1>
        <p className={styles.movie__runtime}>runtime: {runtime}</p>
        <p className={styles.movie__summary}>summary </p>
        <p>{description_intro}</p>
        <p className={styles.movie__genres}>genres</p>
        <ul className={styles.movie__genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p className={styles.movie__torrents}>torrents url</p>
        <ul className={styles.movie__genres}>
          {torrents.map((torrent) => (
            <li key={torrent.hash}> {torrent.url}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
MovieDetail.prototype = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequiredm,
  title: PropTypes.string.isRequired,
  description_intro: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
