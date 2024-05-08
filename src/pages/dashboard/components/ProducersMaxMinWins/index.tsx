import { useEffect } from 'react';
import useApi from '../../../../hooks/useApi';
import Spinner from '../../../../components/Spinner';
import '../../index.scss';

const rows = [
  { id: 1, label: 'Producer' },
  { id: 1, label: 'Interval' },
  { id: 1, label: 'Previous Year' },
  { id: 1, label: 'Following Year' }
];

function ProducersMaxMinWins() {
  const { data, loading, error, execute } = useApi();

  useEffect(
    function getMaxMinInterval() {
      if (!data) execute('get', { projection: 'max-min-win-interval-for-producers' });
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
    <div className="card-content">
      <div className="table-title-content">
        <span className="title">Producers with longest and shortest interval between wins</span>
      </div>
      <span className="table-subtitle">Maximum</span>
      <table>
        <thead>
          <tr>
            {rows.map((row) => (
              <th key={row.id}>{row.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.max?.map((max, index: number) => (
            <tr key={index}>
              <td>{max.producer}</td>
              <td>{max.interval}</td>
              <td>{max.previousWin}</td>
              <td>{max.followingWin}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="table-subtitle">Minimum</span>
      <table>
        <thead>
          <tr>
            {rows.map((row) => (
              <th key={row.id} className="table-head-cell">
                {row.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.min?.map((min, index: number) => (
            <tr key={index}>
              <td>{min.producer}</td>
              <td>{min.interval}</td>
              <td>{min.previousWin}</td>
              <td>{min.followingWin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProducersMaxMinWins;
