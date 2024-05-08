import { render, fireEvent } from '@testing-library/react';
import List from '../../../pages/List';

describe('List component', () => {
  it('should render correctly', () => {
    const { getByText, getByRole } = render(<List />);

    const titleElement = getByText('List movies');
    expect(titleElement).toBeInTheDocument();

    const yesOption = getByRole('option', { name: 'Yes' });
    const noOption = getByRole('option', { name: 'No' });
    expect(yesOption).toBeInTheDocument();
    expect(noOption).toBeInTheDocument();
  });

  it('should select "Yes" and "No" options', () => {
    const { getByRole } = render(<List />);

    const winnerInput = getByRole('combobox', { name: /Winner/i });

    fireEvent.change(winnerInput, { target: { value: 'true' } });
    fireEvent.change(winnerInput, { target: { value: 'false' } });

    expect(winnerInput.value).toBe('false');
  });
});
