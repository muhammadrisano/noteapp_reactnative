import axios from 'axios';

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get('http://notepp.muhammadrisano.online/category', {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};


