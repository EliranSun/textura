import React from 'react';
import { render } from '@testing-library/react';
import { Foo, ButtonAdjuster } from '../pages/foo';

test('renders learn react link', () => {
  const { getByText } = render(<Foo />);
  const linkElement = getByText(/REGISTER BLA B/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render regular buttons if the ButtonAdjuster component fails', () => {
  const component = render(<ButtonAdjuster />);
  expect(component.getByText(/REGISTER BLA B/i)).toBeInTheDocument();
});
