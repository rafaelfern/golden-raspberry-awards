import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../../../components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import { vi } from 'vitest';

describe('Sidebar Component', () => {
  it('should renders sidebar buttons and links', () => {
    render(
      <Router>
        <Sidebar screenWidth={1000} />
      </Router>
    );

    const dashboardButton = screen.getByRole('button', { name: /dashboard/i });
    expect(dashboardButton).toBeInTheDocument();

    const listButton = screen.getByRole('button', { name: /list/i });
    expect(listButton).toBeInTheDocument();

    const dashboardLink = screen.getByRole('link', { name: /dashboard/i });
    expect(dashboardLink).toBeInTheDocument();

    const listLink = screen.getByRole('link', { name: /list/i });
    expect(listLink).toBeInTheDocument();
  });
});
