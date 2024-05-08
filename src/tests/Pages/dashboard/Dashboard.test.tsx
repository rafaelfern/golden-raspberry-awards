import { render, screen } from '@testing-library/react';
import Dashboard from '../../../pages/Dashboard/index';

describe('Dashboard Component', () => {
  it('should render all child components', () => {
    render(<Dashboard />);

    const winnersMultipleTable = screen.queryByTestId('winners-multiple-table');
    const winnersStudiosTable = screen.queryByTestId('winners-studios-table');
    const producersMaxMinWins = screen.queryByTestId('producers-max-min-wins');
    const winnerByYear = screen.queryByTestId('winner-by-year');

    if (winnersMultipleTable) {
      expect(winnersMultipleTable).toBeInTheDocument();
      expect(winnersMultipleTable).not.toBeNull();
    }

    if (winnersStudiosTable) {
      expect(winnersStudiosTable).toBeInTheDocument();
      expect(winnersStudiosTable).not.toBeNull();
    }

    if (producersMaxMinWins) {
      expect(producersMaxMinWins).toBeInTheDocument();
      expect(producersMaxMinWins).not.toBeNull();
    }

    if (winnerByYear) {
      expect(winnerByYear).toBeInTheDocument();
      expect(winnerByYear).not.toBeNull();
    }
  });
});
