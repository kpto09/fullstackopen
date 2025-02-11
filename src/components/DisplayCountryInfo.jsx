const DisplayCountryInfo = ({countryObject}) => {    
    return (
        <div key={countryObject.name}>
            <h2>{countryObject.name}</h2>
            <p>
                capital: {countryObject.capital}<br />
                area: {countryObject.area}<br />
            </p>

            <b>languages:</b>
            {Object.entries(countryObject.languages).map(([code, language]) => (
                <ul key={code}>
                    <li>{language}</li>
                </ul>
            ))}
            
                <img src={countryObject.flags.png}></img>
        </div>
    )
}

export default DisplayCountryInfo