import { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({messageProp, personsProp}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

		const {setMessage, setMessageType} = messageProp
		const {persons, setPersons} = personsProp

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
          	if (window.confirm(`${contactObject.name} is already added to phonebook. Do you want to replace the old number with a new one?`)){
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
								setMessageType("success")
								setMessage(`Changed ${contactObject.name} number.`)
							})
							.catch(error => {
								setMessageType("error")
								setMessage(`Contact not found.'${error}'`)
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
							setMessageType("success")
							setMessage(`Added '${newName}'`)
					})
					.catch(error => {
						setMessageType("error")
						setMessage(`There was an error when adding the contact. Error message: '${error}'`)
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