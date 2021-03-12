import {fetchSixPhotos} from "../../API";

const initialState = {
    photos: [],
    selectedPhoto: {},
};

export const LOAD_PHOTOS = (photos) => ({
    type: "load_all_photos",
    payload: photos
});

export const SELECT_PHOTO = (photo) => ({
    type: "select_photo",
    payload: photo
});

export const fetchPhotos = (start) => async (dispatch) => {
    const photos = await fetchSixPhotos(start);
    dispatch(LOAD_PHOTOS(photos))
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_PHOTOS().type:
            return {...state, photos: [...state.photos, ...payload]}

        case SELECT_PHOTO().type:
            return {...state, selectedPhoto: payload}

        default:
            return state;
    }
};

export default reducer;
