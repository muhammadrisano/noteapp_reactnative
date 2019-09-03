import axios from 'axios';


export const getnote = () => {
    return {
        type: 'GET_NOTE',
        payload: axios.get('http://notepp.muhammadrisano.online/note', {
            headers: { "authorization": "jangan-coba-coba" },
        }),

    };
};

export const addnote = (data) => {
    return {
        type: 'ADD_NOTE',
        payload: axios.post('http://notepp.muhammadrisano.online/note', data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),

    };
};

export const updatenote = (id_note, data) => {
    return {
        type: 'UPDATE_NOTE',
        payload: axios.patch('http://notepp.muhammadrisano.online/note/' + id_note, data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),

    };
};
export const sortnote = (ket) => {
    return {
        type: 'SORT_NOTE',
        payload: axios.get('http://notepp.muhammadrisano.online/note/sort/' + ket, {
            headers: { "authorization": "jangan-coba-coba" },
        }),

    };
};

export const sortbyCategory = (id_category) => {
    return {
        type: 'BYCATEGORY_NOTE',
        payload: axios.get('http://notepp.muhammadrisano.online/note/bycategory/' + id_category, {
            headers: { "authorization": "jangan-coba-coba" },
        }),

    };
};

export const searchNote = (data) => {
    return {
        type: 'SEARCH_NOTE',
        payload: axios.get('http://notepp.muhammadrisano.online/note/searchnote/' + data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),

    };
};


