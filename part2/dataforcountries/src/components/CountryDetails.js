import React from 'react';

const CountryDetails = ({name, capital, population, languages, flag}) => {
    return (
        <>
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>population {population}</p>
            <h2>languages</h2>
            <ul>
                {languages.map(lang => {
                    return (<li key={lang.name}>{lang.name}</li>)
                })}
            </ul>
            <img src={flag} alt={name + '\'s flag' } width="128px"></img>
        </>
    )
}

export default CountryDetails;