import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('renders the heading, tagline, and button', () => {
    render(<LandingPage />);

    // Check if the heading is rendered
    const headingElement = screen.getByText('4Life');
    expect(headingElement).toBeInTheDocument();

    // Check if the tagline is rendered
    const taglineElement = screen.getByText('Find Your Path. Achieve Your Goals.');
    expect(taglineElement).toBeInTheDocument();

    // Check if the button is rendered
    const buttonElement = screen.getByRole('button', { name: 'Find A Mentor' });
    expect(buttonElement).toBeInTheDocument();
  });
});