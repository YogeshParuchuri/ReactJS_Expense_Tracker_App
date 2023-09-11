import './FilterYear.css';
const FilterYear = (props) => {
  const selectedYear=(event)=>{
    if(event.target.value !== "Year")
      props.onChangeFilter(event.target.value);
    else {
      props.onChangeFilter(event.target.value);
    }
  };
    return ( 
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select onChange={selectedYear}>
            <option value="Year">Select the year</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>

     );
}
 
export default FilterYear;