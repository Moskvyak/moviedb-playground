import React from 'react';

import Logo from '../../components/Logo';
import SearchForm from '../../components/SearchForm';
import MovieListItem from '../../components/MovieListItem';
import { searchMovies } from '../../services/Dataservice';

import './Movies.css';

const MIN_CHARACTERS_FOR_SEARCH = 1;

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchValue: ''
    };
  }

  componentDidMount = async () => {
    this.fetchResults();
  };

  fetchResults = async () => {
    try {
      const { searchValue } = this.state;
      const movies = await searchMovies(searchValue);
      this.setState({ movies });
    } catch (error) {
      this.setState({ error: 'Server error' });
    }
  };
  clearSearch = () => {
    this.setState({ searchValue: ''}, this.fetchResults);
  }
  onSearchValueChange = event => {
    const { target: { value } } = event;
    if (!value) {
      this.clearSearch();
      return;
    }

    this.setState({ searchValue: value }, () => {
      if (value.length >= MIN_CHARACTERS_FOR_SEARCH) {
        this.fetchResults();
      }
    });
  };

  render() {
    const { movies, searchValue } = this.state;
    return (
      <div className="page-background-color page-wrapper primary-color">
        <div className="movies__header">
          <div className="movies__logo-wrapper">
            <Logo />
          </div>
          <SearchForm
            error={false}
            value={searchValue}
            loading={false}
            onChange={this.onSearchValueChange}
            clearSearch={this.clearSearch}
            placeholder="Search"
          />
        </div>
        <div className="movies__list-container">
            <h3>Popular movies</h3>
            <div className="movies__grid-container">
            {movies.map(movie => <MovieListItem key={movie.id} { ...movie }/>)}
            </div>
        </div>
      </div>
    );
  }
}
export default Movies;
