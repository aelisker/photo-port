import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  // first test
  test('renders', () => {
    render(<About />);
  })

  // second test (it interchangable with test)
  it('matches snapshot DOM node structure', () => {
    // returns snapshot of about compnent
    const { asFragment } = render(<About />);
    // test and compare whether expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  })
});

