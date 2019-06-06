import React from 'react';
import renderer from 'react-test-renderer';
import RatingItem from '../RatingItem';

describe('<RatingItem />', () => {
  it('should render with rating less than 4', () => {
    const component = renderer.create(<RatingItem rating={3.5} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render with rating between 4 and 7.5', () => {
    const component = renderer.create(<RatingItem rating={5} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render with rating more than 7.5', () => {
    const component = renderer.create(<RatingItem rating={8.5} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
