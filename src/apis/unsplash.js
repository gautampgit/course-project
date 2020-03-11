import axios from 'axios';

const unsplash=axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 5BSTbChbrHOFZfn5PGaNZSqheiFSYMRChsIdT9rNnSo'
    }
});
export default unsplash;