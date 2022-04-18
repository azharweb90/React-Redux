import { actionTypes } from "../actions";

const initialState =  [
           {
               id: 1,
               name: 'xxx',
               emailID: 'xxx@gmail.com',
               phoneNumber: '9999922222',
               website: 'www.xxx.com'
           },
           {
                id: 2,
                name: 'yyy',
                emailID: 'yyy@gmail.com',
                phoneNumber: '9911222222',
                website: 'www.yyy.com'
            }
          ];
const addContactReducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.CREATE_CONTACT:
            return  [ action.payload, ...state];
        default:
            return initialState;
    }
}

export default addContactReducer;