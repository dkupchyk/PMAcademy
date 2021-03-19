import {ADD_EDUCATION, ADD_WORK, SET_EMAIL, SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE, SET_POSITION} from "./actions";

const reducer = (state, {type, payload}) => {
    switch (type) {
        case SET_FIRST_NAME().type:
            return {...state, firstName: payload}

        case SET_LAST_NAME().type:
            return {...state, lastName: payload}

        case SET_POSITION().type:
            return {...state, position: payload}

        case SET_PHONE().type:
            return {...state, phone: payload}

        case SET_EMAIL().type:
            return {...state, email: payload}

        case ADD_EDUCATION().type:
            return {...state, educations: [...state.educations, payload]}

        case ADD_WORK().type:
            return {...state, works: [...state.works, payload]}

        default:
            return state;
    }
};

export default reducer;
