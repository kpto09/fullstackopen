import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = nameObject => {
    const request = axios.post(baseUrl, nameObject)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const deleteContact = id => {
    const request = axios.delete(baseUrl + `/${id}`)
    return request.then(response => response.data)
}

const updateContact = contactObject => {
    const request = axios.put(baseUrl + `/${contactObject.id}`, contactObject)
    return request.then(response => response.data)
}

export default { create, getAll, deleteContact, updateContact }