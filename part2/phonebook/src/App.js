import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import axios from 'axios'

const App = () => {
  // const [persons, addPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523' },
  //   { name: 'Dan Abramov', number: '12-43-234345' },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  // ])
  const [persons, addPersons] = useState([])
  const [filterResults, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const local = "http://localhost:3001/persons"

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
        axios.post(local, nextPerson)
            .then(response => {
                addPersons(persons.concat(nextPerson));
                setNewName("");
                setNewNumber("");
        }).catch(reason => console.log(reason))
    }
    else alert(`${newName} is already in the phonebook`)
  }

  useEffect(() => { axios.get(local).then(response => addPersons(response.data)) } 
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
