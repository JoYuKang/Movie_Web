import PropTypes from "prop-types";

function MovieDetail({key,coverImage,title,description_intro,genres,runtime,torrents})
{
  return <div key={key}>
  <img src={coverImage} alt={title}></img>
  <h2>{title}</h2>
  <h4>runtime: {runtime}</h4>
  <h3>summary </h3>
  <p>{description_intro}</p>
  <p>genres</p>
  <ul>
    {genres.map( genre=> <li key={genre}>{genre}</li>)}
  </ul>
  <h3>torrents url</h3>
  <ul>
    {torrents.map(torrent => <li key={torrent.hash}> {torrent.url}</li>)}
  </ul>
</div>
}
MovieDetail.prototype = {
  id:PropTypes.number.isRequired,
  coverImage :PropTypes.string.isRequiredm,
  title : PropTypes.string.isRequired,
  description_intro : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}


export default MovieDetail;