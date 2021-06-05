import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

it('render quote page', () => {
  const quote = renderer
    .create(<Quote />)
    .toJSON();
  expect(quote).toMatchSnapshot();
});
