import {Album, Collapsable} from "../models";
import {AppState} from "../reducers/rootReducer";

export const getAlbumsSelector = (state: AppState): Collapsable<Album>[] =>
    state.albums.albums;

export const getAlbumSelector = (state: AppState, id: number): Collapsable<Album> => {
    const albums: Collapsable<Album>[] = getAlbumsSelector(state);
    const album = albums.find((e: Collapsable<Album>) => e.id === id);
    return album || ({} as Collapsable<Album>);
};

export const isAllAlbumsCloseSelector = (state: AppState): boolean =>
    state.albums.albums.every((e: Collapsable<Album>) => !e.isOpen);