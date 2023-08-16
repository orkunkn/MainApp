import { SET_USER_NAME, GET_CITIES } from "./actions";

const initialState = {
    name: '',
    cities: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, name: action.payload }
        case GET_CITIES:
            return { ...state, cities: action.payload }
        default:
            return state
    }
}

export default userReducer;