import './index.scss';
interface ISearchInputYear {
  value: string;
  onChange: () => void;
}

const SearchInputYear = (props: ISearchInputYear) => {
  const { value, onChange } = props;
  return <input value={value} onChange={onChange} placeholder="Filter by year" />;
};

export default SearchInputYear;
