import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Navbar from '../../../components/Navbar';

describe('Navbar Component', () => {
  it('should renders Navbar component correctly', () => {
    render(<Navbar />);

    const headingElement = screen.getByText(/Frontend React Test/i);
    expect(headingElement).toBeInTheDocument();

    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toHaveClass('navbar');
  });
});