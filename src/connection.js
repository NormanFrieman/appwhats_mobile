import axios from 'axios'

const connection = axios.create({
    baseURL: 'https://appwhatsweb.herokuapp.com/'
})

export default connection