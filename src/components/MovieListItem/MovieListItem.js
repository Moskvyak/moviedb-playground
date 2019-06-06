import React from 'react';

import RatingItem from '../RatingItem';
import { Link } from 'react-router-dom';

import './MovieListItem.css';

const MovieListItem = React.memo(props => {
  const fileSize = `/w200`;
  const posterUrl = `${process.env
    .REACT_APP_ASSETS_URL}${fileSize}${props.poster_path}`;
  const date = new Date(props.release_date).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric'
  });
  return (
    <div className="grid-item">
      <Link to={`/${props.id}`}>
      <img className="movielistitem__image" src={posterUrl} />
      </Link>
      <div className="movielistitem__title color-white">
        {props.title}
      </div>
      <div className="movielistitem__date color-lightgray">
        {date}
      </div>
      <div className="movielistitem__rating-wrapper">
        <RatingItem rating={props.vote_average} />
      </div>
    </div>
  );
});

export default MovieListItem;
