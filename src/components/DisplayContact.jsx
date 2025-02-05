import personsService from '../services/persons'

const DisplayContact = ({personsProp, messageProp, newFilter}) => {
	const {persons, setPersons} = personsProp
	const {setMessage, setMessageType} = messageProp

	const handleDeleteContact = (name, id) => {
		if (window.confirm(`Delete ${name}`)) {
			personsService
					.deleteContact(id)
					.then(() => {
						setPersons(persons.filter(p => p.id !== id))
						setMessageType("success")
						setMessage(`Deleted ${name} from phonebook.`)
					})
					.catch(() => {
						setMessageType("error")
						setMessage(`Information of ${name} has been removed from server.`)
					})
		}
	}

	const listOfContact = 
		persons
			.filter((p) =>
					p.name.toLowerCase().includes(newFilter.toLowerCase()))
			.map(p => 
				<div key={p.id}> {p.name} {p.number}
					<button onClick={() => handleDeleteContact(p.name, p.id)}> 
					delete 
					</button>
				</div>)

	return (
		<div>
			{listOfContact}
		</div>
	)
}

export default DisplayContact