import React, {useState, useEffect} from 'react';
import CountryDetails from './components/CountryDetails'
import axios from 'axios'

const App = () => {
  const [formValue, changeFormValue] = useState("")
  const [countryResults, updateResults] = useState([])
  const [clicked, setClicked] = useState(false);

  const handleFormChange = (event) => {
    changeFormValue(event.target.value);
  }

  const countriesAPI = "https://restcountries.eu/rest/v2/all"
  useEffect(() => { axios.get(countriesAPI).then(response => updateResults(response.data)) }, [])

  const filter = () => {
    if (formValue.length === 0) {
      return (<></>)
    }
    const filtered = countryResults.filter(
      country => country.name.toLowerCase().includes(formValue.toLowerCase())
    )

    const handleClick = () => {
      return
    }

    if (filtered.length === 1) {
      const {name, capital, population, languages, flag} = filtered[0];
      return <CountryDetails name={name}
                             capital={capital}
                             population={population}
                             languages={languages}
                             flag={flag} />
    }

    if (filtered.length >= 10) {
      return (<p>Too many results. Be a bit more strict.</p>)
    }
    return (
            <div>
              {filtered.map(({name}) => <div key={name}>{name} <button onClick={(e) => changeFormValue(name)}>view</button></div>)}
            </div>
    )
  }

  return (
    <div>
      find countries
      <input onChange={handleFormChange} value={formValue}>
      </input>
      {filter()}
    </div>
  )
}


export default App;
