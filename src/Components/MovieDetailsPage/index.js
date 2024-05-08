import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import MovieDetails from '../MovieDetails'
import CastDetails from '../CastDetails'

function MovieDetailsPage() {
  const {movieId} = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [castDetails, setCastDetails] = useState([])

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const api = `https://api.themoviedb.org/3/movie/${movieId}?api_key="1654471d315b96efded5fde452275b2f"&language=en-US`
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjU0NDcxZDMxNWI5NmVmZGVkNWZkZTQ1MjI3NWIyZiIsInN1YiI6IjY2M2FmODlhZWMyYzBhNDFjNjYzOTg2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YYFy5O5L5Wcn4DgOMRVL9nFQxLhqWCFjhtvkS88joTg`,
          },
        }
        const response = await fetch(api, options)
        const data = await response.json()
        console.log(data)
        setMovieDetails(data)
      } catch (error) {
        console.error('Error fetching movie details:', error)
      }
    }
    const fetchCastDetails = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key="1654471d315b96efded5fde452275b2f"&language=en-US`
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjU0NDcxZDMxNWI5NmVmZGVkNWZkZTQ1MjI3NWIyZiIsInN1YiI6IjY2M2FmODlhZWMyYzBhNDFjNjYzOTg2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YYFy5O5L5Wcn4DgOMRVL9nFQxLhqWCFjhtvkS88joTg`,
          },
        }
        const response = await fetch(url, options)
        const data = await response.json()
        setCastDetails(data.cast)
        console.log(data.cast)
      } catch (error) {
        console.error('Error fetching cast details:', error)
      }
    }

    fetchMovieDetails()
    fetchCastDetails()
  }, [movieId])

  return (
    <div className="movie-details-page">
      {movieDetails && <MovieDetails movie={movieDetails} />}
      {castDetails && <CastDetails cast={castDetails} />}
    </div>
  )
}

export default MovieDetailsPage
