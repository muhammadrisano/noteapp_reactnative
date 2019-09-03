import axios from 'axios';

export const loginUser = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post('http://titaktitak.muhammadrisano.online/user/login', data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

export const registeruser = (data) => {
    return {
        type: 'REGISTER_USER',
        payload: axios.post('http://titaktitak.muhammadrisano.online/user/register', data, {
            headers: { "authorization": "jangan-coba-coba" },
        })
    }
}

export const getUser = (data, header) => {
    return {
        type: 'GET_USER',
        payload: axios.get(`http://titaktitak.muhammadrisano.online/user?search=` + data, {
            headers: header
        }),
    };
};