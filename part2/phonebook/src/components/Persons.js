import React from 'react';

const Persons = ({filterResults, persons, handleNumberDelete}) => {
    
    return (
    <ul>
        {persons.filter(
        person => person.name.toLowerCase().includes(filterResults.toLowerCase()))
        .map(person => { 
            return (<li key={person.id}> {person.name} {person.number} 
        <button onClick={(e) => handleNumberDelete(person.id)}>delete</button></li>) })}
    </ul>)

}

export default Persons;