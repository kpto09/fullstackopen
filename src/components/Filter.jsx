const Filter = ({setFilter}) => {

    const handleFilterChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    return (
        <div>
            <input onChange={handleFilterChange}/> filter countries
        </div>
    )
}

export default Filter