import WinnersMultipleTable from './components/WinnersMultipleTable';
import WinnersStudiosTable from './components/WinnersStudiosTable';
import ProducersMaxMinWins from './components/ProducersMaxMinWins';
import WinnerByYear from './components/WinnerByYear';
import './index.scss';

function Dashboard() {
  return (
    <div className="dash-content">
      <div className="sub-content">
        <WinnersMultipleTable data-testid="winners-multiple-table" />
        <WinnersStudiosTable data-testid="winners-studios-table" />
      </div>
      <div className="sub-content">
        <ProducersMaxMinWins data-testid="producers-max-min-wins" />
        <WinnerByYear data-testid="winner-by-year" />
      </div>
    </div>
  );
}

export default Dashboard;
