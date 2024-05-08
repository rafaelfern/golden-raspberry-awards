import { useEffect } from 'react';
import useApi from '../../../../hooks/useApi';
import '../../index.scss';

const topStudiosPosition = 3;

function WinnersMultipleTable() {
  const { data, loading, error, execute } = useApi();

  useEffect(function getMultipleWinnersPerYear() {
    execute('get', { projection: 'studios-with-win-count' });
  }, []);

  if (loading) return <p>Carregando ... </p>;
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <div className="card-content">
      <div className="table-title-content">
        <span className="title">{`Top ${topStudiosPosition} studios with winners`}</span>
      </div>
      <table role="table-winners-studio">
        <thead>
          <tr>
            <th>Name</th>
            <th>Win Count</th>
          </tr>
        </thead>
        <tbody>
          {data?.studios
            ?.sort((a, b) => b.winCount - a.winCount)
            .slice(0, topStudiosPosition)
            .map((st, index) => (
              <tr key={index}>
                <td>{st.name}</td>
                <td>{st.winCount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default WinnersMultipleTable;
