export default function Filter({ filter, onFilterChange }) {
  const handleFilterChange = event => {
    onFilterChange(event.target.value);
  };

  return (
    <>
      <h6 style={{ margin: '0' }}>Find contact by name: </h6>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
}
