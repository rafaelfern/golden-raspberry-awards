interface ISearchInputYear {
  value: string;
  onChange: () => void;
}

const SearchInputYear = (props: ISearchInputYear) => {
  const { value, onChange } = props;
  return (
    <input
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
      placeholder="Filter by year"
    />
  );
};

export default SearchInputYear;
