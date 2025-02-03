import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayContact from './components/DisplayContact'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')

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
      <h2>Phonebook</h2>
      <Filter setNewFilter={setNewFilter}/>
      
      <h2>Add New Contact</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>

      <h2>Numbers</h2>
      <DisplayContact persons={persons} setPersons={setPersons} newFilter={newFilter} />
    </div>
  )
}

export default App