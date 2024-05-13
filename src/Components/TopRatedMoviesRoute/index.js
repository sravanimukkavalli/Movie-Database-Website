import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import MovieItem from '../MovieItem'

import './index.css'

function TopRatedMoviesRoute() {
  const [isLoading, setIsLoading] = useState(true)
  const [response, setResponse] = useState([])
  const [pageCount, updatePageCount] = useState(1)
  const [totalPgaes, setTotalPages] = useState()
  console.log(totalPgaes)

  const onDecrementPageCount = () => {
    if (pageCount > 1) {
      updatePageCount(prev => prev - 1)
    }
  }

  const onIncrementPageCount = () => {
    if (pageCount < totalPgaes) {
      updatePageCount(prev => prev + 1)
    }
  }

  const getUpdatedData = result =>
    result.map(movie => ({
      adult: movie.adult,
      backdropPath: movie.backdrop_path,
      genreIds: movie.genre_ids,
      id: movie.id,
      originalLanguage: movie.original_language,
      originalTitle: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      releaseDate: movie.release_date,
      title: movie.title,
      video: movie.video,
      voteAverage: movie.vote_average,
      voteCount: movie.vote_count,
    }))

  useEffect(() => {
    const getPopularMovies = async () => {
      const apiKey = '1654471d315b96efded5fde452275b2f'
      const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${pageCount}`
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjU0NDcxZDMxNWI5NmVmZGVkNWZkZTQ1MjI3NWIyZiIsInN1YiI6IjY2M2FmODlhZWMyYzBhNDFjNjYzOTg2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YYFy5O5L5Wcn4DgOMRVL9nFQxLhqWCFjhtvkS88joTg`,
        },
      }
      const apiResponse = await fetch(api, options)
      const data = await apiResponse.json()
      console.log(data)
      if (apiResponse.ok === true) {
        const updatedData = getUpdatedData(data.results)
        setTotalPages(data.total_pages)
        setIsLoading(false)
        setResponse(updatedData)
      }
    }
    getPopularMovies()
  }, [pageCount])

  return isLoading ? (
    <div className="loader-container">
      <Loader type="ThreeDots" width="30" color="#000000" />
    </div>
  ) : (
    <>
      <ul className="movie-grid">
        {response.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </ul>
      <div className="button-controls">
        <button
          type="button"
          className="my-button"
          onClick={onDecrementPageCount}
        >
          Prev
        </button>
        <p className="page-count">{pageCount}</p>
        <button
          type="button"
          className="my-button"
          onClick={onIncrementPageCount}
        >
          Next
        </button>
      </div>
    </>
  )
}
export default TopRatedMoviesRoute
