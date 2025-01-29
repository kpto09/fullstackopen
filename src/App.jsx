import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const checkNameExists = persons.some(p => p.name === newName)
    if (checkNameExists) {
      return window.alert(`${newName} is already added to phonebook`)
    }

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const filteredNames = persons.filter((p) => p.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      Filter contact <input value={newFilter} onChange={handleFilterChange}/>

      <h2>Add New Contact</h2>
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      {filteredNames.map(p => <div key={p.id}> {p.name} {p.number} </div>)}
    </div>
  )
}

export default App