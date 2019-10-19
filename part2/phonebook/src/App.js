import React, { useState } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';

const App = () => {
  const [persons, addPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [filterResults, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  return (
    <div>
      <h1>Phonebook</h1>
      { /* filter */ }
      <Filter filterResults={filterResults} setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm persons={persons} 
                  addPersons={addPersons} 
                  newName={newName}
                  setNewName={setNewName}
                  newNumber={newNumber} 
                  setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      {/* persons */ }
      <Persons filterResults={filterResults} persons={persons} />
    </div>
  )
}

export default App;
