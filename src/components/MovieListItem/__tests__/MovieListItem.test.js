import React from 'react';
import renderer from 'react-test-renderer';
import MovieListItem from '../MovieListItem';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<MovieListItem />', () => {
  const movie = {
    poster_path: 'testpath',
    id: 'test id',
    title: 'test title',
    vote_average: 7.5,
    release_date: '24/10/2018'
  };

  it('should render with required props', () => {
    const component = renderer.create(
      <Router>
        <MovieListItem {...movie} />
      </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
