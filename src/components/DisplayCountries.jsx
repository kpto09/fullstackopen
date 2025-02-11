import DisplayCountryInfo from "./DisplayCountryInfo"

const DisplayCountries = ({allCountry, filter}) => {

    const filterCount = allCountry ? allCountry
    .filter(c => c.name.toLowerCase().includes(filter.toLowerCase())).length : -1
    
    let displayCountries

    if (filterCount == 1) {
        displayCountries = allCountry
        .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
        .map(c => 
            <div key={c.name}>
                <h2>{c.name}</h2>
                <p>
                    capital: {c.capital}<br />
                    area: {c.area}<br />
                </p>

                <b>languages:</b>
                {Object.entries(c.languages).map(([code, language]) => (
                    <ul>
                        <li key={code}>{language}</li>
                    </ul>
                ))}
                
                <img src={c.flags.png}></img>
            </div>
        )
    } else if (filterCount > 0 && filterCount <= 10) {
        displayCountries = allCountry
        .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
        .map(c => 
            <div key={c.name}>
                {c.name}
            </div>
        ) 
    } else {
        displayCountries = "Too many matches, specify another filter"
    }

    return (
        <div>
            {displayCountries}
        </div>
    )
}

export default DisplayCountries