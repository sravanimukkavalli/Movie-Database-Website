import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import {SearchProvider} from './Components/SearchContext'
import Navbar from './Components/Navbar'
import MovieDetailsPage from './Components/MovieDetailsPage'
import TopRatedMoviesRoute from './Components/TopRatedMoviesRoute'
import UpcomingMoviesRoute from './Components/UpcomingMoviesRoute'
import MoviesSearchRoute from './Components/MoviesSearchRoute'
import './App.css'

const App = () => (
  <SearchProvider>
    <div className="whole-container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/top-rated" component={TopRatedMoviesRoute} />
        <Route exact path="/upcoming" component={UpcomingMoviesRoute} />
        <Route exact path="/search" component={MoviesSearchRoute} />
        <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </div>
  </SearchProvider>
)

export default App
