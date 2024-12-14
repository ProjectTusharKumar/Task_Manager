const FilterDropdown = ({ onFilter }) => (
  <select
    onChange={(e) => onFilter(e.target.value)}
    className="border rounded-md p-2 w-full md:w-48"
  >
    <option value="All">All</option>
    <option value="To Do">To Do</option>
    <option value="In Progress">In Progress</option>
    <option value="Done">Done</option>
  </select>
);

export default FilterDropdown;
