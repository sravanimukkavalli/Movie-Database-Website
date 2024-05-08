import {Link} from 'react-router-dom'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {title, posterPath, voteAverage, id} = movieDetails

  return (
    <li className="movie-card">
      <img key={id} src={posterPath} alt={title} />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>Rating: {voteAverage}</p>
        <Link to={`/movies/${id}`}>
          <button type="button">View Details</button>
        </Link>
      </div>
    </li>
  )
}
export default MovieItem
