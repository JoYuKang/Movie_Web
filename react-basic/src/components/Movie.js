import PropTypes from "prop-types";

function Movie({key,coverImage,title,summary,genres})
{
  return <div key={key}>
  <img src={coverImage} alt={title}></img>
  <h2>{title}</h2>
  <p>{summary}</p>
  <ul>
    {genres.map( genre=> <li key={genre}>{genre}</li>)}
  </ul>
</div>
}
Movie.prototype = {
  coverImage :PropTypes.string.isRequiredm,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Movie;