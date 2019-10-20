import React from "react"

const FilterResults = ({countries, filter}) => {
    if (filter.length === 0)
        return (<></>)
    
    const filtered = countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))

    if (filtered.length > 10)
        return (<div><p>Too many matches, specify another filter</p></div>)

    if (filtered.length === 1) {
        const { name, capital, population, languages, flag } = filtered[0];
        console.log(languages);
        return (
               <>
                    <h1>{name}</h1>
                    <p>capital {capital}</p>
                    <p>population {population}</p>
                    <h2>languages</h2>
                    <ul>
                        {languages.map(lang => {
                        console.log(lang)
                        return (<li key={lang.name}>{lang.name}</li>)
                        })}
                    </ul>
                    <img src={flag} alt={name + '\'s flag' } width="128px"></img>
               </>
        )
    }

    return (
        <div>
            {filtered.map(country => <p key={country.name}>{country.name}</p>)}
        </div>
    )
}

export default FilterResults;