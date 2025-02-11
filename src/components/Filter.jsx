const Filter = ({setFilter}) => {

    const handleFilterChange = (event) => {
        event.preventDefault()
        setFilter(event.target.value)
    }

    return (
        <div>
            <input onChange={handleFilterChange}/> filter countries
        </div>
    )
}

export default Filter