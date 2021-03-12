export const LOAD_PHOTOS = (photos) => ({
    type: "load_all_photos",
    payload: photos
});

export const LOAD_ALBUM_PHOTOS = (photos) => ({
    type: "load_album_photos",
    payload: photos
});

export const SELECT_PHOTO = (photo) => ({
    type: "select_photo",
    payload: photo
});

export const SELECT_ALBUM_ID = (id) => ({
    type: "select_album_id",
    payload: id
});

export const SELECT_ALBUM = (album) => ({
    type: "select_album",
    payload: album
});
