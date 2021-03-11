import {createStore} from "redux";
import {reducer} from "./reducers";

export const preloadState = {
    photos: [],
    selectedAlbum: null,
    selectedPhotoId: null,
    selectedAlbumId: null
};

const store = createStore(
    reducer,
    preloadState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;