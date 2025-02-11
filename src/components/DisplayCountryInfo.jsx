const DisplayCountryInfo = () => {
    const countryInfo = allCountry
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
    return (
        <div>
            country info comp
        </div>
    )
}

export default DisplayCountryInfo