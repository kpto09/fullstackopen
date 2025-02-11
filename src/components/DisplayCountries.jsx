import DisplayCountryInfo from "./DisplayCountryInfo"
import { useEffect, useState } from "react"

const DisplayCountries = ({allCountry, filter}) => {
    const [showCountryInfo, setShowCountryInfo] = useState(false)
    const [countryName, setCountryName] = useState('')

    let displayCountries

    const filterCount = allCountry ? allCountry
    .filter(c => c.name.toLowerCase().includes(filter.toLowerCase())).length : -1
    
    const handleShowClick = ({cObject}) => {
        setShowCountryInfo(true)
        setCountryName(cObject)
    }
    
    useEffect(() => {
        if (filterCount == 1) {
            const matchedCountry = allCountry.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))[0]

            // only set states when matchedCountry is not null && matchedCountry.name has changed
            // this ensures we're only updating setCountryName when necessary and doesn't cause re-render overload
            if (matchedCountry && matchedCountry.name !== countryName) {
                setCountryName(matchedCountry)
                setShowCountryInfo(true)
            }
        } else if (countryName && countryName.name !== filter) {
            setCountryName('')
            setShowCountryInfo(false)
        }
    }, [filter])
    // we only want to update countryName when filter changes

    if (filterCount != 1 && filterCount > 0 && filterCount <= 10) {
        displayCountries = allCountry
        .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
        .map(c => 
            <div key={c.name}>
                {c.name} 
                <button onClick={() => handleShowClick({cObject : c})}>show</button>
            </div>
        ) 
    } else if (filterCount > 10) {
        displayCountries = "Too many matches, specify another filter"
    } else {
        displayCountries = "No matches"
    }

    return (
        <div>
            {showCountryInfo ? <DisplayCountryInfo countryObject={countryName}/> : displayCountries}
        </div>
    )
}

export default DisplayCountries