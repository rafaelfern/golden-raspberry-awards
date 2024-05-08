import { useEffect } from 'react';
import useApi from '../../../../hooks/useApi';
import Spinner from '../../../../components/Spinner';
import '../../index.scss';

function WinnersMultipleTable() {
  const { data, loading, error, execute } = useApi();

  useEffect(
    function getMultipleWinnersPerYear() {
      if (!data) execute('get', { projection: 'years-with-multiple-winners' });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (loading)
    return (
      <p className="text-center">
        <Spinner />
      </p>
    );
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <div data-testid="winners-multiple-table" className="card-content">
      <div className="table-title-content">
        <span className="title">List Years with multiple winners</span>
      </div>
      <table role="table-multiple">
        <thead>
          <tr>
            <th>Year</th>
            <th>Win Count</th>
          </tr>
        </thead>
        <tbody>
          {data?.years?.map((yr, index: number) => (
            <tr key={index}>
              <td>{yr.year}</td>
              <td>{yr.winnerCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WinnersMultipleTable;
