import React from 'react';
import './index.scss';
interface ISearchInput {
  searchYear: string;
  setSearchYear: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

function SearchInput(props: Readonly<ISearchInput>) {
  const { searchYear, setSearchYear, handleSubmit } = props;

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-content">
      <label className="search-label">Search</label>
      <div className="input-content">
        <input
          type="number"
          id="simple-search"
          className="input"
          placeholder="Search by year"
          required
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} className="button-search">
        <svg className="svg-content" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="search-label">Search</span>
      </button>
    </form>
  );
}

export default SearchInput;
