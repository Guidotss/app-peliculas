import axios from 'axios'; 

const filmsApi = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default filmsApi;