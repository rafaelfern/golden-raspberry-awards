import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
import SearchInputBoolean from '../../components/SearchInputBoolean';
import SearchInputYear from '../../components/SearchInputYear';
import Backdrop from '../../components/Backdrop';
import Pagination from '../../components/Pagination';
import './index.scss';

function List() {
  const { data, loading, error, execute } = useApi();
  const [currentPage, setCurrentPage] = useState(1);
  const [winnerSelection, setWinnerSelection] = useState('');
  const [yearInput, setYearInput] = useState('');

  const handleSearchByYear = (event) => {
    setYearInput(event.target.value);
    const year = event.target.value.length === 4 ? event.target.value : null;
    if (year) execute('get', { page: 0, size: 10, winner: winnerSelection, year: year });
  };

  useEffect(
    function getListMoviesByYear() {
      if (yearInput.length === 4 || yearInput.length === 0)
        execute('get', { page: currentPage - 1, size: 10, winner: winnerSelection, year: yearInput });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentPage, winnerSelection, yearInput]
  );

  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <div className="card-content-list">
      <div className="list-title-content">
        <span className="list-title">List movies</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th role="textbox">
              <div className="head-input">
                <span>Year</span>
                <SearchInputYear value={yearInput} onChange={handleSearchByYear} />
              </div>
            </th>
            <th>Title</th>
            <th>
              <div className="head-input">
                <span>Winner?</span>
                <SearchInputBoolean value={winnerSelection} onChange={setWinnerSelection} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.content?.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.year}</td>
              <td>{movie.title}</td>
              <td>{movie.winner ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={data?.totalPages} />
      </div>
      <Backdrop isLoading={loading} />
    </div>
  );
}

export default List;
