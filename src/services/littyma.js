import axios from 'axios'

const url = 'http://localhost:3001/api/liittymat'
const getAll = async() => {
    
    const request = await axios.get(url)
    return request.data
}

const post = async newLiittyma => {
    const response = await axios.post(url, newLiittyma)
    return response.data
}

export default { getAll, post }