import './index.scss';
interface ISearchInputBoolean {
  value: string;
  onChange: (e: boolean | undefined) => void;
}

const searchInputBoolean = (props: ISearchInputBoolean) => {
  const { value, onChange } = props;
  return (
    <select
      value={value}
      onChange={(e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'true' || selectedValue === 'false') {
          onChange(e.target.value === 'true' ? true : false);
        } else {
          onChange(undefined);
        }
      }}
      aria-label="Winner?"
    >
      <option value="">Yes/No</option>
      <option aria-label="Yes" value="true">
        Yes
      </option>
      <option aria-label="No" value="false">
        No
      </option>
    </select>
  );
};

export default searchInputBoolean;
