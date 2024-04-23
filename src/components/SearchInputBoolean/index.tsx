interface ISearchInputBoolean {
  value: string;
  onChange: (e: boolean) => void;
}

const searchInputBoolean = (props: ISearchInputBoolean) => {
  const { value, onChange } = props;
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value === 'true' ? true : false)}
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
    >
      <option value="">
        Yes/No
      </option>
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
  );
};

export default searchInputBoolean;