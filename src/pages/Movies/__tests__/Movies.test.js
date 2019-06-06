import React from 'react';
import renderer from 'react-test-renderer';
import Movies from '../Movies';

describe('<Movies />', () => {
  it('should render with required props', () => {
    // TODO overriding ComponentDidMount, better solution would be to use mock data
    Movies.componentDidMount = () => {}
    const component = renderer.create(<Movies />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
