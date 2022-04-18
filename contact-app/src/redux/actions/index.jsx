
//ACTION TYPES AND ACTION CREATOR

export const actionTypes = {
    CREATE_CONTACT: 'CREATE_CONTACT',
}

export const action = (type, payload) => {
    return{
        type: type,
        payload: payload,
    }
}

