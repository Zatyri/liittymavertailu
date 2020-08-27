import axios from 'axios'

const url = 'http://localhost:3001/liittymat'
const getAll = async() => {
    
    const request = await axios.get(url)
    return request.data
}

export default { getAll }