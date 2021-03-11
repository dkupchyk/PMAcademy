export const LOAD_PHOTOS = (photos) => ({
    type: "load_all_photos",
    payload: photos
});

export const LOAD_ALBUM_PHOTOS = (photos) => ({
    type: "load_album_photos",
    payload: photos
});

export const SELECT_PHOTOS = (id) => ({
    type: "get_album_photos",
    payload: id
});

export const SELECT_ALBUM = (id) => ({
    type: "get_album",
    payload: id
});
