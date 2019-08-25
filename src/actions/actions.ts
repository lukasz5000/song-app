import {Album, SongDto} from "../models";
import {ThunkAction} from "redux-thunk";
import {AppState} from "../reducers/rootReducer";
import {Action} from "redux";
import {getAllSongs} from "../api";
import {AxiosResponse} from "axios";
import {groupSongsToAlbums} from "../services/albumService";
import {StandardAction} from '../types';

// action types

export const SET_ALBUMS = 'SET_ALBUMS';
export const TOGGLE_ALBUM = 'TOGGLE_ALBUM';
export const TOGGLE_ALL_ALBUMS = 'TOGGLE_ALL_ALBUMS';

export type AlbumsAction =
    StandardAction<typeof SET_ALBUMS, Album[]> |
    StandardAction<typeof TOGGLE_ALBUM, number> |
    StandardAction<typeof TOGGLE_ALL_ALBUMS>;

// actions

export const toggleAlbum = (payload: number): AlbumsAction => ({
    type: TOGGLE_ALBUM,
    payload
});

export const toggleAlbums = (): AlbumsAction => ({
    type: TOGGLE_ALL_ALBUMS,
});

export const setAlbums = (payload: Album[]): AlbumsAction => ({
    type: SET_ALBUMS,
    payload,
});

export const downloadAllSongs = (): ThunkAction<void, AppState, null, Action<string>> => (dispatch: any) => {
    getAllSongs.then((response: AxiosResponse<SongDto[]>) => {
        const albums: Album[] = groupSongsToAlbums(response.data);
        dispatch(setAlbums(albums));
    });
};