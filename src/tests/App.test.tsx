import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
  it('should renders Navbar and Sidebar', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();

    const sidebarElement = screen.getByTestId('sidebar');
    expect(sidebarElement).toBeInTheDocument();
  });

  it('should renders Dashboard by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const dashboardElement = screen.getByText(/dashboard/i);
    expect(dashboardElement).toBeInTheDocument();
  });
});
