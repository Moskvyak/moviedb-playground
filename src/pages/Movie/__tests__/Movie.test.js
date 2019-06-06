import React from 'react';
import renderer from 'react-test-renderer';
import { Movie } from '../Movie';

describe('<Movie />', () => {
  it('should render with required props', () => {
    const component = renderer.create(<Movie />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
