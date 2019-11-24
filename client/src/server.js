import * as axios from 'axios';

export const users_create = user => {
    return axios.post('/api/users', user);
}