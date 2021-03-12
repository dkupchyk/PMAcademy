import {fetchAlbum, fetchAlbumPhotos, fetchUserInfo} from "../../API";

const initialState = {
    albumUser: null,
    albumPhotos: [],
    selectedAlbum: {},
    selectedAlbumId: null
};

export const LOAD_ALBUM_PHOTOS = (photos) => ({
    type: "load_album_photos",
    payload: photos
});

export const SELECT_ALBUM_ID = (id) => ({
    type: "select_album_id",
    payload: id
});

export const SELECT_ALBUM = (album) => ({
    type: "select_album",
    payload: album
});

export const SET_ALBUM_USER = (user) => ({
    type: "set_album_user",
    payload: user
});

export const getAlbum = (id) => async (dispatch) => {
    const album = await fetchAlbum(id);
    dispatch(SELECT_ALBUM(album));
};

export const getAlbumPhotos = (start, id) => async (dispatch) => {
    const photos = await fetchAlbumPhotos(start, id);
    dispatch(LOAD_ALBUM_PHOTOS(photos));
};

export const getUser = (id) => async (dispatch) => {
    const user = await fetchUserInfo(id);
    dispatch(SET_ALBUM_USER(user.user));
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case LOAD_ALBUM_PHOTOS().type:
            return {...state, albumPhotos: [...state.albumPhotos, ...payload]}

        case SELECT_ALBUM().type:
            return {...state, selectedAlbum: payload}

        case SELECT_ALBUM_ID().type:
            return {...state, selectedAlbumId: payload}

        case SET_ALBUM_USER().type:
            return {...state, albumUser: payload}

        default:
            return state;
    }
};

export default reducer;
