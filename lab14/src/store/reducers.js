import {LOAD_PHOTOS, LOAD_ALBUM_PHOTOS, SELECT_PHOTO, SELECT_ALBUM} from "./actions";

export const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {

        case LOAD_PHOTOS().type:
            return { ...state, photos: [...state.photos, ...action.payload]}

        case LOAD_ALBUM_PHOTOS().type:
            return { ...state,  photos: [...state.photos, ...action.payload]}

        case SELECT_PHOTO().type:
            return { ...state, selectedPhotoId: action.payload}

        case SELECT_ALBUM().type:
            return { ...state, selectedAlbum: action.payload}

        default:
            return state;
    }
}
