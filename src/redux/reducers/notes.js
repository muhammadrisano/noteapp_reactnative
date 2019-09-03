const globalState = {
    note: [],
    sortnote: []
};


const notes = (state = globalState, action) => {

    switch (action.type) {
        case 'GET_NOTE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                note: action.payload.data.result
            };
        case 'ADD_NOTE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'ADD_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'ADD_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };

        case 'UPDATE_NOTE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'UPDATE_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'UPDATE_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };

        case 'SORT_NOTE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'SORT_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'SORT_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                note: action.payload.data.result
            };
        case 'BYCATEGORY_NOTE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'BYCATEGORY_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'BYCATEGORY_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                note: action.payload.data.result
            };
        case 'SEARCH_NOTE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'SEARCH_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'SEARCH_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                note: action.payload.data.result
            };


        default:
            return state;





    }
}

export default notes;