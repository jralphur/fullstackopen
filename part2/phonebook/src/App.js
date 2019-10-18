import React, { useState } from 'react';

const App = () => {
  const [persons, addPersons] = useState([
    {name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.findIndex(p => p.name.toUpperCase() === newName.toUpperCase()) === -1) {
      const nextPerson = {
        name: newName,
      }
      addPersons(persons.concat(nextPerson));
    }
    else alert(`${newName} is already in the phonebook`)
    
    setNewName("");
  }

  const handleStateChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit} >
        <div>
          name: <input onChange={handleStateChange} value={newName} ></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}> {person.name} </li>)}
      </ul>
    </div>
  )
}

export default App;
