import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Backdrop from '../../../components/Backdrop';

describe('Backdrop Component', () => {
  it('should render the backdrop with spinner when isLoading is true', () => {
    const isLoading = true;
    render(<Backdrop isLoading={isLoading} />);

    const backdropElement = screen.getByTestId('backdrop');
    expect(backdropElement).toBeInTheDocument();

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('should not render the backdrop when isLoading is false', () => {
    const isLoading = false;
    render(<Backdrop isLoading={isLoading} />);

    const backdropElement = screen.queryByTestId('backdrop');
    expect(backdropElement).not.toBeInTheDocument();
  });
});
