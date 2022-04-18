import { combineReducers } from "redux";
import addContactReducer from "./addContact";

 const rootReducer = combineReducers({
    contacts: addContactReducer,
});

export default rootReducer;