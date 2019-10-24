import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import personService from './services/phonebook.js'

const App = () => {
  const [persons, addPersons] = useState([])
  const [filterResults, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  } 

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.findIndex(p => p.name.toUpperCase() === newName.toUpperCase()) === -1) {
        const nextPerson = {
            name: newName,
            number: newNumber
        }

        personService.addPerson(nextPerson)
            .then(newPerson => {
                addPersons(persons.concat(nextPerson));
                setNewName("");
                setNewNumber("");
        }).catch(reason => console.log(reason))
    }
    else alert(`${newName} is already in the phonebook`)
  }

  useEffect(() => { personService.getAll().then(persons => addPersons(persons)) } 
           ,[]);
  return (
    <div>
      <h1>Phonebook</h1>
      { /* filter */ }
      <Filter filterResults={filterResults} setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm newName={newName}
                  newNumber={newNumber} 
                  setNewNumber={setNewNumber}
                  handleNameChange={handleNameChange}
                  handleSubmit={handleSubmit}
                  handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      {/* persons */ }
      <Persons filterResults={filterResults} persons={persons} />
    </div>
  )
}

export default App;
