const Persons = ({persons, newFilter}) => {
    return (
        <div>
            { 
            persons
            .filter((p) => p.name.toLowerCase().includes(newFilter.toLowerCase()))
            .map(p => <div key={p.id}> {p.name} {p.number} </div>)
            }
        </div>
    )
}

export default Persons