import { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
    
        const checkNameExists = persons.some(p => p.name === newName)
        if (checkNameExists) {
          return window.alert(`${newName} is already added to phonebook`)
        }
    
        const nameObject = {
          name: newName,
          number: newNumber,
          id: `${persons.length+1}`
        }

        // add contact into database
        personsService
					.create(nameObject)
					.then(contact => {
							setPersons(persons.concat(contact))
							setNewName('')
							setNewNumber('')
					})
					.catch(error => {
						alert(`There was an error when adding the contact. Error message: '${error}'`)
					})
    }

    return (
			<div>
				<form onSubmit={addName}>
					<div>name: <input value={newName} onChange={handleNameChange}/></div>
					<div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
					<div>
					<button type="submit">add</button>
					</div>
				</form>
			</div>
    )
}

export default PersonForm