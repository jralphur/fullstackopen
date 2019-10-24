import React from 'react'

const PersonForm = ({ newName,
                      newNumber,
                      handleNameChange,
                      handleSubmit,
                      handleNumberChange }) => {
  
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