export const Filter = ({ filter, onChageFilter }) => {
  return (
    <label>
      Find contacts dy name
      <input type="text" value={filter} onChange={onChageFilter} />
    </label>
  );
};
