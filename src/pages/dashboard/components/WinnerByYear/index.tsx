import { useState } from 'react';
import SearchInput from '../../../../components/SearchInput';
import useApi from '../../../../hooks/useApi';
import '../../index.scss';

function WinnerByYear() {
  const { data, execute } = useApi();
  const [searchYear, setSearchYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovieByYear();
  };

  const getMovieByYear = () => {
    if (searchYear) execute('get', { winner: true, year: searchYear });
  };

  return (
    <div className="card-content">
      <div className="table-title-content">
        <span className="title">List movie winners by year</span>
      </div>
      <div className="search-content">
        <SearchInput setSearchYear={setSearchYear} searchYear={searchYear} handleSubmit={handleSubmit} />
      </div>
      <table role="table-winner">
        <thead>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((dt, index) => (
            <tr key={dt.id}>
              <td>{dt.id}</td>
              <td>{dt.year}</td>
              <td>{dt.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WinnerByYear;
