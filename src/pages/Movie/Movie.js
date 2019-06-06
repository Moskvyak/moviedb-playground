import React from 'react';
import { getMovie } from '../../services/Dataservice';
import { withRouter } from 'react-router-dom';
import './Movie.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }
  goBack = () => {
    this.props.history.goBack();
  };
  componentDidMount = async () => {
    const { match } = this.props;
    if (match && match.params && match.params.id) {
      const movie = await getMovie(match.params.id);
      this.setState({ movie });
    }
  };
  render() {
    const {
      backdrop_path,
      poster_path,
      title,
      vote_average,
      release_date,
      runtime,
      overview
    } = this.state.movie;
    const backDropFileSize = '/w500';
    const posterFileSize = '/w200';
    const rating = `${vote_average * 10} %`;
    const backDropUrl = `${process.env
      .REACT_APP_ASSETS_URL}${backDropFileSize}${backdrop_path}`;
    const posterUrl = `${process.env
      .REACT_APP_ASSETS_URL}${posterFileSize}${poster_path}`;

    const date = new Date(release_date).toLocaleString('en-us', {
      year: 'numeric'
    });
    const movieHours = parseInt(runtime / 60);
    const movieLength = `${movieHours}h ${runtime - movieHours * 60}min`;

    return (
      <div className="page-background-color page-wrapper primary-color movie__page">
        <div className="movie__header">
          <div className="movie__backdrop-wrapper">
            <div className="movie__back-button" onClick={this.goBack}>
            <FontAwesomeIcon
              className="searchform__right-icon"
              icon={faArrowLeft}
              color={'#FFF'}
              size="1x"
              
              />
              </div>
            <img src={backDropUrl} />
          </div>
          <div className="movie__title-section">
            <div className="movie__poster-wrapper">
              <img src={posterUrl} />
            </div>
            <div className="movie__title-wrapper">
              {title}
              <div className="movie__extra-info color-lightgray">
                {date} &#183; {rating} User Score
                <br />
                {movieLength}
              </div>
            </div>
          </div>
        </div>
        <div className="movie__section">
          <h3 className="color-white"> Overview</h3>
          <div className="color-lightgray">
            {overview}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Movie);
