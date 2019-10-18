import React, { useState } from 'react';

const App = () => {
  const [persons, addPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterResults, setFilter] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.findIndex(p => p.name.toUpperCase() === newName.toUpperCase()) === -1) {
      const nextPerson = {
        name: newName,
        number: newNumber
      }
      addPersons(persons.concat(nextPerson));
      setNewName("");
      setNewNumber("");
    }
    else alert(`${newName} is already in the phonebook`)
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with 
        <input onChange={handleFilterChange} value={filterResults} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit} >
        <div>
          name: <input onChange={handleNameChange} value={newName} ></input>
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(
          person => person.name.toLowerCase().includes(filterResults.toLowerCase()))
          .map(person => <li key={person.name}> {person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App;
