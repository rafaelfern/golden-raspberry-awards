import { render, screen } from '@testing-library/react';
import Spinner from '../../../components/Spinner';

describe('Spinner Component', () => {
  it('should renders correctly', () => {
    render(<Spinner />);

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
    
    const svgElement = spinnerElement.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    
    const srOnlyElement = screen.getByText('Loading...');
    expect(srOnlyElement).toBeInTheDocument();
    expect(srOnlyElement).toHaveClass('sr-only');
  });
});