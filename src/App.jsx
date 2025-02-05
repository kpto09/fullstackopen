import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayContact from './components/DisplayContact'
import Notification from './components/Notification'
import personsService from './services/persons'

const App = () => {
  // states
  const [persons, setPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(undefined)
  const [messageType, setMessageType] = useState('')

  // function props
  const messageProp = {message, messageType, setMessage, setMessageType}
  const personsProp = {persons, setPersons}

  // retrieves all the contact from database
  useEffect(() => {   
    personsService      
    .getAll() 
    .then(initialContactData => {
      setPersons(initialContactData)
    })
    .catch(error => {
      alert(`There was an error retrieving all contacts. Error message: '${error}'`)
    })
  }, [])

  return (
    <div>
      <Notification messageProp={messageProp}/>
      <h2 className="phonebookHeaders">Phonebook</h2>
      <Filter setNewFilter={setNewFilter}/>
      
      <h2 className="phonebookHeaders">Add New Contact</h2>
      <PersonForm
        messageProp={messageProp}
        personsProp={personsProp}
      />

      <h2 className="phonebookHeaders">Numbers</h2>
      <DisplayContact 
        personsProp={personsProp}
        messageProp={messageProp}
        newFilter={newFilter}
      />
    </div>
  )
}

export default App