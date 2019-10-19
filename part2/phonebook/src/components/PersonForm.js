import React from 'react'

const PersonForm = ({persons, 
                    addPersons, 
                    newName,
                    setNewName, 
                    newNumber,
                    setNewNumber}) => {
  
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
            addPersons(persons.concat(nextPerson));
            setNewName("");
            setNewNumber("");
        }
        else alert(`${newName} is already in the phonebook`)
    }
    
    return (
        <form onSubmit={handleSubmit}>
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
    )
}
export default PersonForm;