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
				let contactObject = {
					name: newName,
					number: newNumber,
					id: `${persons.length+1}`
				}

        const checkNameExists = persons.some(p => p.name === newName)
        if (checkNameExists) {
						const curPersonId = persons.filter(p => p.name === newName)[0].id
          	if (window.confirm(`${newName} is already added to phonebook. Do you want to replace the old number with a new one?`)){
							contactObject = {
								...contactObject,
								id: curPersonId
							}
							
							return personsService
							.updateContact(contactObject)
							.then(() => {
								setPersons(
									persons
									.map(p => p.id === curPersonId ? {...p, ...contactObject} : p))
							})
							.catch(error => {
								alert(`There was an error when updating the contact. Error message: '${error}'`)
							})
						}
        }
    
        // add contact into database
        personsService
					.create(contactObject)
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