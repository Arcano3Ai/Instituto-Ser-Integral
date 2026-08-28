import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the Navbar and Hero component without crashing', async () => {
    render(<App />);
    
    // El Navbar debe estar presente
    const logos = screen.getAllByText('Instituto Ser Integral');
    expect(logos[0]).toBeInTheDocument();
    
    // El Hero debe estar presente
    const heroTitle = screen.getByText('Terapia Gestalt');
    expect(heroTitle).toBeInTheDocument();
  });
});
