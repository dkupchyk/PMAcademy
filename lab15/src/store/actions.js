export const CHANGE_STEP = (step) => ({
    type: "change_step",
    payload: step
});

export const SET_FIRST_NAME = (name) => ({
    type: "set_first_name",
    payload: name
});

export const SET_LAST_NAME = (name) => ({
    type: "set_last_name",
    payload: name
});

export const SET_POSITION = (position) => ({
    type: "set_position",
    payload: position
});

export const SET_PHONE = (phone) => ({
    type: "set_phone",
    payload: phone
});

export const SET_EMAIL = (email) => ({
    type: "set_email",
    payload: email
});

export const ADD_EDUCATION = (education) => ({
    type: "add_education",
    payload: education
});

export const ADD_WORK = (work) => ({
    type: "add_work",
    payload: work
});
