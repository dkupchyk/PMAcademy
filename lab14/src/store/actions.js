export const LOAD_PHOTOS = (photos) => ({
    type: "load_all_photos",
    payload: photos
});

export const LOAD_ALBUM_PHOTOS = (photos) => ({
    type: "load_album_photos",
    payload: photos
});

export const SELECT_PHOTO = (id) => ({
    type: "select_photo",
    payload: id
});

export const SELECT_ALBUM = (album) => ({
    type: "select_album",
    payload: album
});
