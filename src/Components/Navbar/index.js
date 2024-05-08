import {Link, useHistory} from 'react-router-dom'

import {useState} from 'react'
import {useSearch} from '../SearchContext/index'

import './index.css'

function Navbar() {
  const [query, setQuery] = useState('')
  const history = useHistory()

  const {setSearchInput} = useSearch()

  const onClickSearchButton = () => {
    setSearchInput(query)
    setQuery('')
    history.push('/search')
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1>movieDB</h1>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Popular
          </Link>
          <Link to="/top-rated" className="navbar-item">
            Top Rated
          </Link>
          <Link to="/upcoming" className="navbar-item">
            Upcoming
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  type="button"
                  onClick={onClickSearchButton}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
