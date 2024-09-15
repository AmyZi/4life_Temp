import React from 'react';
import { render, screen } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import App from './App'; 
import Landing from './LandingPage/LandingPage';
import Home from './LandingPage/HomePage';
import MenteePage from './Features/MenteePage';

describe('App', () => {
  // ... other test cases ...

  it('renders MenteePage on the "/mentee" path with the correct name', () => {
    render(
      <Routes> {/* Remove the MemoryRouter */}
        <Route path="/" element={<App />} /> 
        <Route path="/mentee" element={<MenteePage name="John" />} /> 
      </Routes>
    );

    // Check if MenteePage content is rendered with the correct name
    expect(screen.getByText('Hi, John!')).toBeInTheDocument();
  });
});