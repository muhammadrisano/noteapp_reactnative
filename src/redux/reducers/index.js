import { combineReducers } from 'redux';
import users from './users';
import categorys from './categorys';
import notes from './notes';
const appReducer = combineReducers({
    users,
    categorys,
    notes

});

export default appReducer;