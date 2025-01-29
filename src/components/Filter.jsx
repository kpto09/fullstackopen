const Filter = ({setNewFilter}) => {
    
    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }
    
    return (
        <div>
            Filter contact <input onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter