import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSearch} from '../SearchContext'

function MoviesSearchRoute() {
  const {searchInput} = useSearch()
  const [searchedMovies, setSearchedMovies] = useState([])

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const api = `https://api.themoviedb.org/3/search/movie?api_key="1654471d315b96efded5fde452275b2f"&query=${searchInput}&language=en-US&page=1`
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjU0NDcxZDMxNWI5NmVmZGVkNWZkZTQ1MjI3NWIyZiIsInN1YiI6IjY2M2FmODlhZWMyYzBhNDFjNjYzOTg2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YYFy5O5L5Wcn4DgOMRVL9nFQxLhqWCFjhtvkS88joTg`,
          },
        }
        const response = await fetch(api, options)
        const data = await response.json()
        setSearchedMovies(data.results)
        console.log(response)
      } catch (error) {
        console.error('Error searching movies:', error)
      }
    }
    if (searchInput) {
      handleSearch()
    } else {
      setSearchedMovies([])
    }
  }, [searchInput])

  return (
    <div className="searched-movies-page">
      <div className="movie-grid">
        {searchedMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
              <Link to={`/movies/${movie.id}`}>
                <button type="button">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesSearchRoute
