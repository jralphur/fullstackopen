import React, {useState, useEffect} from 'react';
import FilterResults from './components/FilterResults'
import axios from 'axios'

const App = () => {
  const [formValue, changeFormValue] = useState("")
  const [countryResults, updateResults] = useState([])

  const handleFormChange = (event) => {
    changeFormValue(event.target.value);
  }

  const countriesAPI = "https://restcountries.eu/rest/v2/all"
  useEffect(() => { axios.get(countriesAPI).then(response => updateResults(response.data)) }, []);
  return (
    <div>
      find countries
      <input onChange={handleFormChange} value={formValue}>
      </input>
      <FilterResults countries={countryResults} filter={formValue} />
    </div>
  )
}


export default App;
