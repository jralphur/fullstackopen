import axios from 'axios' 

const local = "http://localhost:3001/persons"

const addPerson = (newPerson) => {
    const response = axios.post(local, newPerson)
    return response.then(response => response.data)
}

const getAll = () => {
    const response = axios.get(local)
    return response.then(response => response.data)
}

const deletePerson = (id) => {
    const response = axios.delete(`${local}/${id}`)
    return response.then(response => response.data)
}

const update = (id, newPerson) => {
    const request = axios.put(`${local}/${id}`, newPerson)
    return request.then(response => response.data)
}

export default { addPerson, getAll, deletePerson, update }