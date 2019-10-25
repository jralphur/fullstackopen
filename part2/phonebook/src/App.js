import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Status from './components/Status';
import personService from './services/phonebook.js'

const App = () => {
  const [persons, addPersons] = useState([])
  const [filterResults, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [error, setError] = useState({message: "", class: ""});

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  } 

  const handleNumberDelete = (id) => {
    const person = persons.find(peeps => peeps.id === id)
    if (person === undefined) {
      console.log("not available locally!")
      return;
    }

    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
    personService.deletePerson(id).then(after => {
      addPersons(persons.filter(person => person.id !== id))
      setNewName("")
      setNewNumber("")
    }).catch((error) => {
      setError({message: `${person.name} is already deleted, or doesn't exist`, class: "error"})
      addPersons(persons.filter(person => person.id !== id))

      setTimeout(() => setError({message: "", class: ""}), 5000);
    })
  }
}
  const handleSubmit = (event) => {
    event.preventDefault()
    const personIndex = persons.findIndex(p => p.name.toUpperCase() === newName.toUpperCase()) 
    const nextPerson = {
      name: newName,
      number: newNumber
  }
    if (personIndex === -1) {
        personService.addPerson(nextPerson)
            .then(newPerson => {
                addPersons(persons.concat(newPerson));
                setNewName("");
                setNewNumber("");
        }).catch(reason => {
          setError({message: reason, error: "error"});
          setTimeout(() => setError({message: "", class: ""}), 5000);
        })
    }
    else {
      const {name, id} = persons[personIndex];
      if (window.confirm(`${name} is already in the phonebook, replace the old number with a new one?`)) {
        personService.update(id, nextPerson).then(newPerson => {
          addPersons(persons.map(person => person.id !== id ? person : newPerson))
          setError({message: `Successfully updated ${name} into the database`, class: "success"})
          setTimeout(() => setError({message: "", class: ""}), 10000000000000000);
        }
        )
      }
    }
  }

  useEffect(() => { personService.getAll().then(persons => addPersons(persons)) } 
           ,[]);

  return (
    <div>
      <Status className={error.class} message={error.message} />
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
      <Persons filterResults={filterResults} persons={persons} handleNumberDelete={handleNumberDelete} />
    </div>
  )
}

export default App;
