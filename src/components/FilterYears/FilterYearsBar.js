import "./FilterYearsBar.css";

function FilterYearsBar(props) {
  function onlyUniqueYear(value, index, self) {
    return self.indexOf(value) === index;
  }
  const listOfYears = props.blogsItemDict
    .map((em) => em.blogDatetime.slice(0, 4))
    .filter(onlyUniqueYear)
    .sort();

  listOfYears.unshift("All");

  const listOfYearsDropDown = listOfYears.map((em) => (
    <option value={em}>{em}</option>
  ));

  const onYearFilterChange = (event) => {
    props.onYearBlogsFilterChange(event.target.value);
  };

  return (
    <div className="filter-years-dropdown">
      <label>Filter by Year</label>
      <select onChange={onYearFilterChange}>{listOfYearsDropDown}</select>
    </div>
  );
}

export default FilterYearsBar;
