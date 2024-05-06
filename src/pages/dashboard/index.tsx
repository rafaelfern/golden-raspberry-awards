import WinnersMultipleTable from './components/WinnersMultipleTable';
import WinnersStudiosTable from './components/WinnersStudiosTable';
import ProducersMaxMinWins from './components/ProducersMaxMinWins';
import WinnerByYear from './components/WinnerByYear';

function Dashboard() {
  return (
    <div>
      <div className="lg:flex lg:flex-row md:flex md:flex-col justify-evenly gap-5">
        <WinnersMultipleTable />
        <WinnersStudiosTable />
      </div>
      <div className="lg:flex lg:flex-row md:flex md:flex-col justify-evenly gap-5 ">
        <ProducersMaxMinWins />
        <WinnerByYear />
      </div>
    </div>
  );
}

export default Dashboard;
