import personsService from '../services/persons'

const DisplayContact = ({persons, newFilter, setPersons}) => {
	const handleDeleteContact = (name, id) => {
		if (window.confirm(`Delete ${name}`)) {
			personsService
					.deleteContact(id)
					.then(() => {
						setPersons(persons.filter(p => p.id !== id))
					})
					.catch(error => {
						alert(`There was an error when deleting. Error message: '${error}'`)
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