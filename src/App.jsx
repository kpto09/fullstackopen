import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import DisplayCountries from './components/DisplayCountries'
import countriesServices from './services/countries'

function App() {
  const [allCountry, setAllCountry] = useState(null)
  const [filter, setFilter] = useState('')



  useEffect(() => {
    if (filter) {
      console.log("effect run, filter is now: ", filter)
      countriesServices
      .getAllCountries()
      .then(response => {
        const extractCountryData = response.map(country => ({
          name: country.name.common,
          capital: country.capital,
          area: country.area,
          languages: country.languages,
          flags: country.flags
        }))
        setAllCountry(extractCountryData)  
      })
      .catch(error => console.log ("error when retrieving all countries: ", error))
    }
  },[filter])

  return (
    <div>
      <Filter 
        setFilter={setFilter}
      />
      <DisplayCountries 
        filter={filter}
        allCountry={allCountry}
      />
    </div>
  )
}

export default App
