import {Album, AlbumsState, Collapsable} from '../models';
import {
    SET_ALBUMS,
    AlbumsAction, TOGGLE_ALBUM, TOGGLE_ALL_ALBUMS
} from "../actions/actions";

export const initialState: AlbumsState = {
    albums: [],
};

export function albumsReducer(
    state = initialState,
    action: AlbumsAction,
): AlbumsState {
    switch (action.type) {
        case SET_ALBUMS: {
            const albums = action.payload.map((e) => ({...e, isOpen: false}));
            return {
                ...state,
                albums,
            };
        }
        case TOGGLE_ALBUM: {
            const albums = state.albums.map((e: Collapsable<Album>) => {
                if (e.id === action.payload) {
                    return {
                        ...e,
                        isOpen: !e.isOpen
                    };
                }

                return e;
            });

            return {
                ...state,
                albums,
            }
        }

        case TOGGLE_ALL_ALBUMS: {
            const isAllOpen: boolean = state.albums.every((e: Collapsable<Album>) => e.isOpen);
            const isAllClose: boolean = state.albums.every((e: Collapsable<Album>) => !e.isOpen);
            const closeAlbums: Collapsable<Album>[] =  state.albums
                .map((e: Collapsable<Album>) => ({...e, isOpen: false}));
            const openAlbums: Collapsable<Album>[] =  state.albums
                .map((e: Collapsable<Album>) => ({...e, isOpen: true}));

            if (isAllOpen) {
                return {
                    ...state,
                    albums: closeAlbums
                };
            } else if (isAllClose) {
                return {
                    ...state,
                    albums: openAlbums
                };
            } else {
                return {
                    ...state,
                    albums: closeAlbums
                };
            }
        }

        default:
            return state
    }
}