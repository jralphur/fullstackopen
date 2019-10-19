import React from 'react';

const Persons = ({filterResults, persons}) => {
    return (
    <ul>
        {persons.filter(
        person => person.name.toLowerCase().includes(filterResults.toLowerCase()))
        .map(person => <li key={person.name}> {person.name} {person.number}</li>)}
    </ul>)

}

export default Persons;