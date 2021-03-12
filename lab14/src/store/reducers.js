import {LOAD_PHOTOS, LOAD_ALBUM_PHOTOS, SELECT_PHOTO, SELECT_ALBUM, SELECT_ALBUM_ID} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {

        case LOAD_PHOTOS().type:
            return {...state, photos: [...state.photos, ...action.payload]}

        case LOAD_ALBUM_PHOTOS().type:
            return {...state, albumPhotos: [...state.albumPhotos, ...action.payload]}

        case SELECT_PHOTO().type:
            return {...state, selectedPhoto: action.payload}

        case SELECT_ALBUM().type:
            return {...state, selectedAlbum: action.payload}

        case SELECT_ALBUM_ID().type:
            return {...state, selectedAlbumId: action.payload}

        default:
            return state;
    }
}
